import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "13 17 23", // #0d1117
		"--theme-font-color-dark": "245 245 245", // #f5f5f5
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #00529e 
		"--color-primary-50": "217 229 240", // #d9e5f0
		"--color-primary-100": "204 220 236", // #ccdcec
		"--color-primary-200": "191 212 231", // #bfd4e7
		"--color-primary-300": "153 186 216", // #99bad8
		"--color-primary-400": "77 134 187", // #4d86bb
		"--color-primary-500": "0 82 158", // #00529e
		"--color-primary-600": "0 74 142", // #004a8e
		"--color-primary-700": "0 62 119", // #003e77
		"--color-primary-800": "0 49 95", // #00315f
		"--color-primary-900": "0 40 77", // #00284d
		// secondary | #92bce3 
		"--color-secondary-50": "239 245 251", // #eff5fb
		"--color-secondary-100": "233 242 249", // #e9f2f9
		"--color-secondary-200": "228 238 248", // #e4eef8
		"--color-secondary-300": "211 228 244", // #d3e4f4
		"--color-secondary-400": "179 208 235", // #b3d0eb
		"--color-secondary-500": "146 188 227", // #92bce3
		"--color-secondary-600": "131 169 204", // #83a9cc
		"--color-secondary-700": "110 141 170", // #6e8daa
		"--color-secondary-800": "88 113 136", // #587188
		"--color-secondary-900": "72 92 111", // #485c6f
		// tertiary | #e9bb4e 
		"--color-tertiary-50": "252 245 228", // #fcf5e4
		"--color-tertiary-100": "251 241 220", // #fbf1dc
		"--color-tertiary-200": "250 238 211", // #faeed3
		"--color-tertiary-300": "246 228 184", // #f6e4b8
		"--color-tertiary-400": "240 207 131", // #f0cf83
		"--color-tertiary-500": "233 187 78", // #e9bb4e
		"--color-tertiary-600": "210 168 70", // #d2a846
		"--color-tertiary-700": "175 140 59", // #af8c3b
		"--color-tertiary-800": "140 112 47", // #8c702f
		"--color-tertiary-900": "114 92 38", // #725c26
		// success | #a6d189 
		"--color-success-50": "242 248 237", // #f2f8ed
		"--color-success-100": "237 246 231", // #edf6e7
		"--color-success-200": "233 244 226", // #e9f4e2
		"--color-success-300": "219 237 208", // #dbedd0
		"--color-success-400": "193 223 172", // #c1dfac
		"--color-success-500": "166 209 137", // #a6d189
		"--color-success-600": "149 188 123", // #95bc7b
		"--color-success-700": "125 157 103", // #7d9d67
		"--color-success-800": "100 125 82", // #647d52
		"--color-success-900": "81 102 67", // #516643
		// warning | #e5c890 
		"--color-warning-50": "251 247 238", // #fbf7ee
		"--color-warning-100": "250 244 233", // #faf4e9
		"--color-warning-200": "249 241 227", // #f9f1e3
		"--color-warning-300": "245 233 211", // #f5e9d3
		"--color-warning-400": "237 217 177", // #edd9b1
		"--color-warning-500": "229 200 144", // #e5c890
		"--color-warning-600": "206 180 130", // #ceb482
		"--color-warning-700": "172 150 108", // #ac966c
		"--color-warning-800": "137 120 86", // #897856
		"--color-warning-900": "112 98 71", // #706247
		// error | #e78284 
		"--color-error-50": "251 236 237", // #fbeced
		"--color-error-100": "250 230 230", // #fae6e6
		"--color-error-200": "249 224 224", // #f9e0e0
		"--color-error-300": "245 205 206", // #f5cdce
		"--color-error-400": "238 168 169", // #eea8a9
		"--color-error-500": "231 130 132", // #e78284
		"--color-error-600": "208 117 119", // #d07577
		"--color-error-700": "173 98 99", // #ad6263
		"--color-error-800": "139 78 79", // #8b4e4f
		"--color-error-900": "113 64 65", // #714041
		// surface | #0d1117 
		"--color-surface-50": "245 245 245", // #f5f5f5
		"--color-surface-100": "207 207 209", // #cfcfd1
		"--color-surface-200": "195 196 197", // #c3c4c5
		"--color-surface-300": "158 160 162", // #9ea0a2
		"--color-surface-400": "86 88 93", // #56585d
		"--color-surface-500": "13 17 23", // #0d1117
		"--color-surface-600": "12 15 21", // #0c0f15
		"--color-surface-700": "10 13 17", // #0a0d11
		"--color-surface-800": "8 10 14", // #080a0e
		"--color-surface-900": "13 17 23", // #0d1117
		
	}
}
