import { Link } from 'gatsby'
import React from 'react'

export const onRenderBody = ({setHeadComponents}) => {
    setHeadComponents([
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-Black.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-BlackItalic.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-Bold.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-BoldItalic.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-ExtraBold.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-ExtraBoldItalic.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-ExtraLight.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-Italic.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-Light.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-LightItalic.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-Medium.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-MediumItalic.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-Regular.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-SemiBold.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-SemiBoldItalic.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-Thin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />,
        <Link
            key='montserrat'
            rel='preload'
            href='static/fonts/montserrat/Montserrat-ThinItalic.woff2'
            as='font'
            type='font/woff2'
            crossOrigin = 'anonymous'
        />
    ])
}
