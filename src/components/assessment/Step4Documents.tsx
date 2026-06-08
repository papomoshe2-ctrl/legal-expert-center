'use client'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, File, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Props {
  value: File[]
  onChange: (v: File[]) => void
  onNext: () => void
  onPrev: () => void
}

export default function Step4Documents({ value, onChange, onNext, onPrev }: Props) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange([...value, ...acceptedFiles])
  }, [value, onChange])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
  })

  const remove = (i: number) => {
    onChange(value.filter((_, idx) => idx !== i))
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>העלאת מסמכים</h2>
      <p className="text-sm text-gray-500 mb-6">ניתן להעלות מסמכים רלוונטיים — כתב אישום, פסקי דין, מסמכים רפואיים. זה רשות.</p>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all mb-4 ${
          isDragActive ? 'border-[#C9A84C] bg-[#C9A84C]/5' : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="w-8 h-8 mx-auto mb-3 text-gray-400" />
        <p className="text-sm font-medium text-gray-600">
          {isDragActive ? 'שחרר את הקבצים כאן...' : 'גרור קבצים לכאן, או לחץ לבחירה'}
        </p>
        <p className="text-xs text-gray-400 mt-1">PDF, Word, תמונות — עד 10MB לקובץ</p>
      </div>

      {value.length > 0 && (
        <div className="space-y-2 mb-4">
          {value.map((file, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <File className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className="text-sm text-gray-700 flex-1 truncate">{file.name}</span>
              <button onClick={() => remove(i)} className="text-gray-400 hover:text-red-500 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-3 mt-6">
        <Button variant="outline" onClick={onPrev} className="flex-1">חזור</Button>
        <Button onClick={onNext} className="flex-1 text-white" style={{ backgroundColor: '#0A1628' }}>
          {value.length > 0 ? `המשך (${value.length} קבצים)` : 'המשך ללא מסמכים'}
        </Button>
      </div>
    </div>
  )
}
