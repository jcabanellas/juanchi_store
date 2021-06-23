//constantes globales para la aplicación

export const Nameapp="juanchi_store";

export async function getData(harina000){
    const response = await fetch (`https://api.mercadolibre.com//sites/MLA/search?q=${harina000}`);
    const data =await response.json();
    return data.results;
}