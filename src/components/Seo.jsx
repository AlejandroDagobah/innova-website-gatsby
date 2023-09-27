import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export default function SEO({title, description, pathname, children}){
    const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description}/>
            <meta name="image" content={seo.image}/>

            {/*Hotjar Tracking Code for https://innova-egroup.com.ec/*/}
            <script>
               { (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3672520,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')}
            </script>

            {children}
        </>
    )

}