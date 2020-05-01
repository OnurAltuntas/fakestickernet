import React from "react"
import TextInput from "../utility/TextInput"
import SelectInput from "../utility/SelectInput";

const ProductDetail = (
    { categories,
        product,
        onSave, onChange }
) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput name="unitPrice" label="unitPrice Name" value={product.unitPrice} onChange={onChange} error="hata" />
            
            <SelectInput name="categoryId" label="Category" value={product.categoryId || ""} defaultOption="Select"
                options={categories.map(category => ({
                    value: category.id,
                    text: category.categoryName

                }))}
                onChange={onChange}
                error="Hata"
            />


            <TextInput name="unitsInStock" label="unitsInStock Name" value={product.unitsInStock} onChange={onChange} error="hata" />
            <TextInput name="image" label="image Name" value={product.image} onChange={onChange} error="hata" />


            <button type="submit" className="btn btn-success">Save</button>
        </form>
    )
}

export default ProductDetail;