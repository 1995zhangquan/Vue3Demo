import {computed, reactive} from "vue";



/*
// 高级校验规则示例
const advancedValidationRules = {
  age: [
    { name: 'required', message: '请输入年龄' },
    { name: 'range', params: [18, 100], message: '年龄必须在18-100之间' }
  ],
  password: [
    { name: 'required', message: '请输入密码' },
    {
      name: 'pattern',
      params: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
      message: '密码必须包含大小写字母和数字，至少8位'
    }
  ],
  confirmPassword: [
    { name: 'required', message: '请确认密码' },
    {
      validator: (value) => value === formData.password,
      message: '两次输入的密码不一致'
    }
  ]
}
* 1.校验规则配置
const rules = {
  fieldName: [
    {
      name: 'ruleName',      // 规则名称
      params: ruleParams,    // 规则参数（可选）
      message: '错误信息'     // 自定义错误信息
    }
  ]
}
2.返回值说明
// validateForm 返回值
{
  isValid: true/false,    // 表单是否校验通过
  errors: {               // 错误信息集合
    fieldName: '错误信息'
  }
}
3.添加自定义校验规则
// 在 validator.js 中扩展
export const validationRules = {
  // ... 现有规则
  idCard: (value) => {
    if (!value) return true
    const idCardRegex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return idCardRegex.test(value)
  }
}
// validateField 返回值
'' 或 '错误信息'         // 空字符串表示校验通过
*
*
* */

const validationRules = {
    // 必填校验
    required: (value) => {
        if (value === null || value === undefined) return false
        if (typeof value === 'string') return value.trim().length > 0
        if (Array.isArray(value)) return value.length > 0
        return true
    },
    
    // 手机号码校验
    mobile: (value) => {
        if (!value) return true // 允许为空
        const mobileRegex = /^1[3-9]\d{9}$/
        return mobileRegex.test(value)
    },
    
    // 邮箱校验
    email: (value) => {
        if (!value) return true // 允许为空
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(value)
    },
    
    // 最小长度校验
    minLength: (min) => (value) => {
        if (!value) return true
        return String(value).length >= min
    },
    
    // 最大长度校验
    maxLength: (max) => (value) => {
        if (!value) return true
        return String(value).length <= max
    },
    
    // 数字范围校验
    range: (min, max) => (value) => {
        if (value === null || value === undefined || value === '') return true
        const num = Number(value)
        return !isNaN(num) && num >= min && num <= max
    },
    
    // 自定义正则校验
    pattern: (regex) => (value) => {
        if (!value) return true
        return regex.test(value)
    }
}

class FormValidate {
    constructor(rules) {
        this.rules = rules || {}
        this.errors = {}
    }
    
    // 单字段校验
    validateField(fieldName, value, rules) {
        const fieldRules = rules || this.rules[fieldName] || []
        let errorMessage = ''
        
        for (const rule of fieldRules) {
            // 处理必填校验
            if (rule.name === 'required') {
                if (!validationRules.required(value)) {
                    errorMessage = rule.message || '该字段为必填项'
                    break
                }
            }
            // 处理其他校验规则（允许为空）
            else if (value !== null && value !== undefined && value !== '') {
                let isValid = false
                
                switch (rule.name) {
                    case 'mobile':
                        isValid = validationRules.mobile(value)
                        break
                    case 'email':
                        isValid = validationRules.email(value)
                        break
                    case 'minLength':
                        isValid = validationRules.minLength(rule.params)(value)
                        break
                    case 'maxLength':
                        isValid = validationRules.maxLength(rule.params)(value)
                        break
                    case 'range':
                        isValid = validationRules.range(rule.params[0], rule.params[1])(value)
                        break
                    case 'pattern':
                        isValid = validationRules.pattern(rule.params)(value)
                        break
                    default:
                        // 自定义校验函数
                        if (typeof rule.validator === 'function') {
                            isValid = rule.validator(value)
                        }
                }
                
                if (!isValid) {
                    errorMessage = rule.message || '格式不正确'
                    break
                }
            }
        }
        
        return errorMessage
    }
    
    // 表单整体校验
    validate(formData) {
        this.errors = {}
        let isValid = true
        
        for (const fieldName in this.rules) {
            const value = formData[fieldName]
            const errorMessage = this.validateField(fieldName, value)
            
            if (errorMessage) {
                this.errors[fieldName] = errorMessage
                isValid = false
            }
        }
        
        return {
            isValid,
            errors: this.errors
        }
    }
    
    // 获取字段错误信息
    getError(fieldName) {
        return this.errors[fieldName] || ''
    }
    
    // 清除错误信息
    clearErrors() {
        this.errors = {}
    }
    
    // 清除指定字段错误
    clearError(fieldName) {
        delete this.errors[fieldName]
    }
}

export function userFormValidate(rules) {
    const validator = new FormValidate(rules)
    const errors = reactive({})
    
    // 校验单个字段
    const validateField = (fieldName, value) => {
        const errorMessage = validator.validateField(fieldName, value)
        errors[fieldName] = errorMessage
        return !errorMessage
    }
    
    // 校验整个表单
    const validateForm = (formData) => {
        const result = validator.validate(formData)
        Object.assign(errors, result.errors)
        return result.isValid
    }
    
    // 清除所有错误
    const clearErrors = () => {
        validator.clearErrors()
        Object.keys(errors).forEach(key => delete errors[key])
    }
    
    // 清除指定字段错误
    const clearError = (fieldName) => {
        validator.clearError(fieldName)
        delete errors[fieldName]
    }
    
    return {
        errors: computed(() => ({ ...errors })),
        validateField,
        validateForm,
        clearErrors,
        clearError,
        hasError: computed(() => Object.keys(errors).length > 0)
    }
}