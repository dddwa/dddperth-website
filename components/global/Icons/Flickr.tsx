import React from 'react'

interface FlickrIconProps {
  title?: string
}

export const FlickrIcon = ({ title = 'Flickr icon' }: FlickrIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 34.972" role="img" focusable="false">
    <title>{title}</title>
    <path d="M26.2 0H8.771A8.789 8.789 0 000 8.771v17.458a8.784 8.784 0 008.771 8.743h17.458A8.789 8.789 0 0035 26.2V8.771A8.831 8.831 0 0026.2 0zM11.019 22.565a5.08 5.08 0 115.163-5.079 5.118 5.118 0 01-5.163 5.079zm12.934 0a5.08 5.08 0 115.163-5.079 5.118 5.118 0 01-5.163 5.079z" />
  </svg>
)
