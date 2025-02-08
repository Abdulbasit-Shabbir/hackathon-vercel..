import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "product"] {
        _id,
        productName,
        description,
        price,
        discountPercentage,
        pricewithoutDiscount,
        rating,
        status,
        category,
        ratingCount,
        tags,
        sizes,
        "imageUrl": image.asset->url
    }
`);

