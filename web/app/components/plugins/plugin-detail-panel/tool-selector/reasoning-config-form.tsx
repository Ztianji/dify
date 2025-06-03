import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import produce from 'immer'
import {
  RiArrowRightUpLine,
  RiBracesLine,
} from '@remixicon/react'
import Tooltip from '@/app/components/base/tooltip'
import Switch from '@/app/components/base/switch'
import Input from '@/app/components/workflow/nodes/_base/components/input-support-select-var'
import VarReferencePicker from '@/app/components/workflow/nodes/_base/components/variable/var-reference-picker'
import AppSelector from '@/app/components/plugins/plugin-detail-panel/app-selector'
import ModelParameterModal from '@/app/components/plugins/plugin-detail-panel/model-selector'
import { useLanguage } from '@/app/components/header/account-setting/model-provider-page/hooks'
import { FormTypeEnum } from '@/app/components/header/account-setting/model-provider-page/declarations'
import type { Node } from 'reactflow'
import type {
  NodeOutPutVar,
  ValueSelector,
  Var,
} from '@/app/components/workflow/types'
import type { ToolVarInputs } from '@/app/components/workflow/nodes/tool/types'
import { VarType as VarKindType } from '@/app/components/workflow/nodes/tool/types'
import { VarType } from '@/app/components/workflow/types'
import cn from '@/utils/classnames'
import { useBoolean } from 'ahooks'
import SchemaModal from './schema-modal'
import type { SchemaRoot } from '@/app/components/workflow/nodes/llm/types'

type Props = {
  value: Record<string, any>
  onChange: (val: Record<string, any>) => void
  schemas: any[]
  nodeOutputVars: NodeOutPutVar[],
  availableNodes: Node[],
  nodeId: string
}

const ReasoningConfigForm: React.FC<Props> = ({
  value,
  onChange,
  schemas,
  nodeOutputVars,
  availableNodes,
  nodeId,
}) => {
  const { t } = useTranslation()
  const language = useLanguage()
  const handleAutomatic = (key: string, val: any) => {
    onChange({
      ...value,
      [key]: {
        value: val ? null : value[key]?.value,
        auto: val ? 1 : 0,
      },
    })
  }

  const [inputsIsFocus, setInputsIsFocus] = useState<Record<string, boolean>>({})
  const handleInputFocus = useCallback((variable: string) => {
    return (value: boolean) => {
      setInputsIsFocus((prev) => {
        return {
          ...prev,
          [variable]: value,
        }
      })
    }
  }, [])
  const handleNotMixedTypeChange = useCallback((variable: string) => {
    return (varValue: ValueSelector | string, varKindType: VarKindType) => {
      const newValue = produce(value, (draft: ToolVarInputs) => {
        const target = draft[variable].value
        if (target) {
          target.type = varKindType
          target.value = varValue
        }
        else {
          draft[variable].value = {
            type: varKindType,
            value: varValue,
          }
        }
      })
      onChange(newValue)
    }
  }, [value, onChange])
  const handleMixedTypeChange = useCallback((variable: string) => {
    return (itemValue: string) => {
      const newValue = produce(value, (draft: ToolVarInputs) => {
        const target = draft[variable].value
        if (target) {
          target.value = itemValue
        }
        else {
          draft[variable].value = {
            type: VarKindType.mixed,
            value: itemValue,
          }
        }
      })
      onChange(newValue)
    }
  }, [value, onChange])
  const handleFileChange = useCallback((variable: string) => {
    return (varValue: ValueSelector | string) => {
      const newValue = produce(value, (draft: ToolVarInputs) => {
        draft[variable].value = {
          type: VarKindType.variable,
          value: varValue,
        }
      })
      onChange(newValue)
    }
  }, [value, onChange])
  const handleAppChange = useCallback((variable: string) => {
    return (app: {
      app_id: string
      inputs: Record<string, any>
      files?: any[]
    }) => {
      const newValue = produce(value, (draft: ToolVarInputs) => {
        draft[variable].value = app as any
      })
      onChange(newValue)
    }
  }, [onChange, value])
  const handleModelChange = useCallback((variable: string) => {
    return (model: any) => {
      const newValue = produce(value, (draft: ToolVarInputs) => {
        draft[variable].value = {
          ...draft[variable].value,
          ...model,
        } as any
      })
      onChange(newValue)
    }
  }, [onChange, value])

  const [isShowSchema, {
    setTrue: showSchema,
    setFalse: hideSchema,
  }] = useBoolean(false)

  const [schema, setSchema] = useState<SchemaRoot | null>(null)
  const [schemaRootName, setSchemaRootName] = useState<string>('')

  const renderField = (schema: any, showSchema: (schema: SchemaRoot, rootName: string) => void) => {
    const {
      variable,
      label,
      required,
      tooltip,
      type,
      scope,
      url,
      input_schema,
    } = schema
    const auto = value[variable]?.auto
    const tooltipContent = (tooltip && (
      <Tooltip
        popupContent={<div className='w-[200px]'>
          {tooltip[language] || tooltip.en_US}
        </div>}
        triggerClassName='ml-0.5 w-4 h-4'
        asChild={false} />
    ))
    const varInput = value[variable].value
    const isNumber = type === FormTypeEnum.textNumber
    const isSelect = type === FormTypeEnum.select
    const isFile = type === FormTypeEnum.file || type === FormTypeEnum.files
    const isObject = type === FormTypeEnum.object
    const isArray = type === FormTypeEnum.array
    const isShowSchemaTooltip = isObject || isArray
    const isAppSelector = type === FormTypeEnum.appSelector
    const isModelSelector = type === FormTypeEnum.modelSelector
    // const isToolSelector = type === FormTypeEnum.toolSelector
    const isString = !isNumber && !isSelect && !isFile && !isAppSelector && !isModelSelector && !isObject && !isArray
    const valueType = (() => {
      if (isNumber) return VarType.number
      if (isSelect) return VarType.string
      if (isFile) return VarType.file
      if (isObject) return VarType.object
      if (isArray) return VarType.array

      return VarType.string
    })()

    return (
      <div key={variable} className='space-y-1'>
        <div className='system-sm-semibold flex items-center justify-between py-2 text-text-secondary'>
          <div className='flex items-center'>
            <span className={cn('code-sm-semibold max-w-[140px] truncate text-text-secondary')} title={label[language] || label.en_US}>{label[language] || label.en_US}</span>
            {required && (
              <span className='ml-1 text-red-500'>*</span>
            )}
            {tooltipContent}
            <span className='system-xs-regular mx-1 text-text-quaternary'>·</span>
            <span className='system-xs-regular text-text-tertiary'>{valueType}</span>
            {isShowSchemaTooltip && (
              <Tooltip
                popupContent={<div className='system-xs-medium text-text-secondary'>
                  {t('workflow.nodes.agent.clickToViewParameterSchema')}
                </div>}
                asChild={false}>
                  <div
                    className='ml-0.5 cursor-pointer rounded-[4px] p-px text-text-tertiary hover:bg-state-base-hover hover:text-text-secondary'
                    onClick={() => showSchema(input_schema as SchemaRoot, label[language] || label.en_US)}
                  >
                    <RiBracesLine className='size-3.5'/>
                  </div>
              </Tooltip>
            )}

          </div>
          <div className='flex cursor-pointer items-center gap-1 rounded-[6px] border border-divider-subtle bg-background-default-lighter px-2 py-1 hover:bg-state-base-hover' onClick={() => handleAutomatic(variable, !auto)}>
            <span className='system-xs-medium text-text-secondary'>{t('plugin.detailPanel.toolSelector.auto')}</span>
            <Switch
              size='xs'
              defaultValue={!!auto}
              onChange={val => handleAutomatic(variable, val)}
            />
          </div>
        </div>
        {auto === 0 && (
          <>
            {isString && (
              <Input
                className={cn(inputsIsFocus[variable] ? 'border-components-input-border-active bg-components-input-bg-active shadow-xs' : 'border-components-input-border-hover bg-components-input-bg-normal', 'rounded-lg border px-3 py-[6px]')}
                value={varInput?.value as string || ''}
                onChange={handleMixedTypeChange(variable)}
                nodesOutputVars={nodeOutputVars}
                availableNodes={availableNodes}
                onFocusChange={handleInputFocus(variable)}
                placeholder={t('workflow.nodes.http.insertVarPlaceholder')!}
                placeholderClassName='!leading-[21px]'
              />
            )}
            {/* {isString && (
              <VarReferencePicker
                zIndex={1001}
                readonly={false}
                isShowNodeName
                nodeId={nodeId}
                value={varInput?.value || ''}
                onChange={handleNotMixedTypeChange(variable)}
                defaultVarKindType={VarKindType.variable}
                filterVar={(varPayload: Var) => varPayload.type === VarType.number || varPayload.type === VarType.secret || varPayload.type === VarType.string}
              />
            )} */}
            {(isNumber || isSelect) && (
              <VarReferencePicker
                zIndex={1001}
                readonly={false}
                isShowNodeName
                nodeId={nodeId}
                value={varInput?.type === VarKindType.constant ? (varInput?.value ?? '') : (varInput?.value ?? [])}
                onChange={handleNotMixedTypeChange(variable)}
                defaultVarKindType={varInput?.type || (isNumber ? VarKindType.constant : VarKindType.variable)}
                isSupportConstantValue
                filterVar={isNumber ? (varPayload: Var) => varPayload.type === schema._type : undefined}
                availableVars={isSelect ? nodeOutputVars : undefined}
                schema={schema}
              />
            )}
            {(isFile || isObject || isArray) && (
              <VarReferencePicker
                zIndex={1001}
                readonly={false}
                isShowNodeName
                nodeId={nodeId}
                value={varInput?.value || []}
                onChange={handleFileChange(variable)}
                defaultVarKindType={VarKindType.variable}
                filterVar={(varPayload: Var) => {
                  if(isFile)
                    return varPayload.type === VarType.file || varPayload.type === VarType.arrayFile
                  if(isObject)
                    return varPayload.type === VarType.object
                  if(isArray)
                    return [VarType.array, VarType.arrayNumber, VarType.arrayString, VarType.arrayObject, VarType.arrayFile].includes(varPayload.type)
                  return true
                }}
              />
            )}
            {isAppSelector && (
              <AppSelector
                disabled={false}
                scope={scope || 'all'}
                value={varInput as any}
                onSelect={handleAppChange(variable)}
              />
            )}
            {isModelSelector && (
              <ModelParameterModal
                popupClassName='!w-[387px]'
                isAdvancedMode
                isInWorkflow
                value={varInput}
                setModel={handleModelChange(variable)}
                scope={scope}
              />
            )}
          </>
        )}
        {url && (
          <a
            href={url}
            target='_blank' rel='noopener noreferrer'
            className='inline-flex items-center text-xs text-text-accent'
          >
            {t('tools.howToGet')}
            <RiArrowRightUpLine className='ml-1 h-3 w-3' />
          </a>
        )}
      </div>
    )
  }
  return (
    <div className='space-y-3 px-4 py-2'>
      {!isShowSchema && schemas.map(schema => renderField(schema, (s: SchemaRoot, rootName: string) => {
        setSchema(s)
        setSchemaRootName(rootName)
        showSchema()
      }))}
      {isShowSchema && (
        <SchemaModal
          isShow={isShowSchema}
          schema={schema!}
          rootName={schemaRootName}
          onClose={hideSchema}
        />
      )}
    </div>
  )
}

export default ReasoningConfigForm
