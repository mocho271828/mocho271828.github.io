import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'

export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== ''

// PVを測定する
export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

// イベントを型で管理
type ContactEvent = {
  action: 'submit_form'
  category: 'contact'
}

type ClickEvent = {
  action: 'click'
  category: 'other'
}

export type Event = (ContactEvent | ClickEvent) & {
  label?: Record<string, string | number | boolean>
  value?: string
}

// GAイベントを発火させる
export const event = ({ action, category, label, value = '' }: Event) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label ? JSON.stringify(label) : '',
    value,
  })
}
// 以下、usePageViewとGoogleAnalytics関数は変更なし

export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}
