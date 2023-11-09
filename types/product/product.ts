export interface productListType {
    productId: number;
    productName: string;
    productPrice: number;
    productImage: string;
    productCategory: string;
    productStock: number;
    productMinStock: number;
    productRating: number;
    productStatus: string;
    productReviewCount: number;
}

export interface productCreateType {
    salesCount: number,
    productName: string,
    price: number,
    productCode: string,
    mainImgUrl: string,
    productImgUrl: string[],
    productExplainImgUrl: string[],  
    discount: number,
    discountType: number,
    childCategoryId: number,
    parentCategoryId: number,
    colorCodeId : number[],
    sizeId: number[],
    shippingFee: number,
    isShippingFree: boolean,
    isDisplay: number,
}

export interface productImageType {
    productImageId: number;
    productImage: string;
}