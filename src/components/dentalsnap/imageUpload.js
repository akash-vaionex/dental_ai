'use client'
import { useState } from 'react'
export function ImageUpload() {
  const [image, setImage] = useState(null)
  const handleChange = (e) => {
    const files = e.target.files;
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.svg)$/i;
    for( let i = 0; i<files.length; i++){
        if(!allowedExtensions.exec(files[i].name)){
            alert('Inavlid file type. Only JPG, PNG and scg files are allowed.')
            e.target.value = ''
        }
        else{
            setImage(e.target.files[0])
        }
    }
    
  }

  return (
    <div class="flex items-center justify-center w-full z-10">
      <div className="max-w-2xl w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-[#0061ff] border-dashed rounded-lg cursor-pointer bg-transparent hover:bg-gray-50/50"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-[#0061ff] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-[#0061ff]">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-[#0061ff] dark:text-gray-400">
              SVG, PNG, JPG (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            onChange={handleChange}
            accept=".jpg,.jpeg,.png,.svg"
          />
        </label>
      </div>
    </div>
  )
}
