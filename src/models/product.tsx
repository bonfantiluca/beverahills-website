interface Product {
    name: string;
    price: number;
    denominazione: string;
    vitigno: string;
    annata: string;
    gradazione: number;
    aromi: string;
    affinamento: string;
    regione: string;
    paese: string;
    size: number;
    ingredients: string;
    nutritionalValues: {
        energy: string;
        fat: string;
        di_cui_saturi: string;
        carbohydrates: string;
        di_cui_zuccheri: string;
        protein: string;
        sale: string;
    };
    environmentalInfo: {
        category: string;
        material: string;
        code: string;
        waste: string;
    }[];
}