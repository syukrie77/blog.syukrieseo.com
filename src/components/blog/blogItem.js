import React from 'react'
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const BlogItem = ({ alt, image, slug, title}) => {
    const gatsbyImage = getImage(image)

    return (
        <div className="hover:opacity-50"> 
            <Link to={`/${slug}`}>
                {gatsbyImage && (
                    <img
                        src={gatsbyImage.images.fallback.src}
                        alt={alt}
                        className="w-full h-full object-cover rounded-lg mb-2" // Menggunakan object-cover untuk memastikan gambar menutupi area dengan ukuran yang diberikan
                    />
                )}
                <h3 className="font-semibold text-black max-w-4/5 mx-auto text-center mt-2 capitalize sm:text-base text-sm">{title}</h3>
           </Link>
        </div>
    )
}

export default BlogItem