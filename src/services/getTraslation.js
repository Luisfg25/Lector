export const getTraslation = (traslation , currentLang, traslateLang) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa562713c4msh5833bea0d35f32fp1e3e5ajsnf9ee711e8a93',
            'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
        }
    };

    let search = traslation

    return (
    fetch(`https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${currentLang}%7C${traslateLang}&q=${search}'&mt=1&onlyprivate=0&de=a%40b.c`, options)
    .then(res => res.json())
    .then(res => {
        let resp = res.responseData.translatedText
        return(resp)
      })
    .catch(err => console.error(err))
    )
}