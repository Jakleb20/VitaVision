export interface IFood {
    _id: string;
    name: string;
    amount: number;
    
    // Vitamine
    vitaminA?: number; // in micrograms
    vitaminB1?: number; // Thiamin in milligrams
    vitaminB2?: number; // Riboflavin in milligrams
    vitaminB3?: number; // Niacin in milligrams
    vitaminB5?: number; // Pantothenic acid in milligrams
    vitaminB6?: number; // in milligrams
    vitaminB7?: number; // Biotin in micrograms
    vitaminB9?: number; // Folate in micrograms
    vitaminB12?: number; // in micrograms
    vitaminC?: number; // in milligrams
    vitaminD?: number; // in micrograms
    vitaminE?: number; // in milligrams
    vitaminK?: number; // in micrograms

    // Makronährstoffe
    carbohydrates?: number; // in grams
    protein?: number; // in grams
    fat?: number; // in grams
    fiber?: number; // in grams
    sugars?: number; // in grams

    // Mikronährstoffe
    calcium?: number; // in milligrams
    iron?: number; // in milligrams
    magnesium?: number; // in milligrams
    phosphorus?: number; // in milligrams
    potassium?: number; // in milligrams
    sodium?: number; // in milligrams
    zinc?: number; // in milligrams
    copper?: number; // in milligrams
    manganese?: number; // in milligrams
    selenium?: number; // in micrograms
}

