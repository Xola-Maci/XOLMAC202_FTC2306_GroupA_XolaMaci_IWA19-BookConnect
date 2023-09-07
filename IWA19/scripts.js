// the line below will import information from the './data' file
import { BOOKS_PER_PAGE,authors, genres, books } from "./data";

const matches = books;
const range = [0,BOOKS_PER_PAGE];
let page = 1;

//Extracting information from the book array in the data js file and displa.
const dataList = document.querySelector('[data-list-items]');

const Preview = (bookExtract) => {
    const fragmentPage = document.createDocumentFragment();
    for (const book of bookExtract) {

        const previewItems = document.createElement('button')
        previewItems.className = 'preview';
        previewItems.setAttribute('id', `${books.id}`);

         previewItems.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${book.image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${book.title}</h3>
                <div class="preview__author">${authors[book.author]}</div>
            </div>`;

            fragmentPage.appendChild(previewItems);
            dataList.appendChild(fragmentPage)
    }
}
Preview(books.slice(0, BOOKS_PER_PAGE));

dataList.addEventListener('click', function(event){
    document.querySelector('[data-list-active]').show();

    const idBook = event.target.closest('.preview').id;
    let showingBook =[];
    for (const actBook of books){
        if(idBook === actBook.id){
            showingBook = actBook;
            break
        };
    }
    dataListImage.src = activeBook.image
    dataListBlur.src = activeBook.image;
    dataListTitle.innerHTML = activeBook.title;
    dataListSubtitle.innerHTML = `${authors[activeBook.author]} (${(activeBook.published).slice(0, 4)})` 
    dataListDescription.innerHTML = activeBook.description;


    activeCloseOverlay.addEventListener('click', function(event){
        dataListActive.close();
    })

})

/*// copy names from below
const dataList = document.querySelector('[data-list-items]');
const fragmentPage = document.createDocumentFragment();
const extractedItem = books.slice(0,BOOKS_PER_PAGE);

for (let i=0; i < extractedItem.length; i++) {
    const previewItems = document.createElement('button');

    previewItems.classInfo = 'preview';
    previewItems.setAttribute('id',`${books[i].id}`);

    sneakPeak.innerHTML = /*html*/ /*`
    <div>
       <image class='preview__image' src="${books[i].image}" alt="no picture available" />
    </div>
    <div class='preview__info'>
      <dt class='preview__title'>${books[i].title}</dt>
      <dt class='preview__author'> By ${authors[books[i].author]}</dt>
    </div>`;

    fragmentPage.appendChild(previewItems);
    dataList.appendChild(fragmentPage);
}
dataList.appendChild(fragmentPage);*/

// The two conditions below give an arror when the content is not found
if (!books && !Array.isArray(matches)){
    throw new Error('Source required')
} 
if (!range && range.length < 2) {
    throw new Error('Range must be an array with two numbers')
}

// CSS theme colour range for the day and night times
 
const theme = {
    day: {
        dark: '10, 10, 20',
        light: '255, 255, 255',
    },
    
    night: {
        dark: '255, 255, 255',
        light: '10, 10, 20',
    }

}

/**The 'changeTheme' function will allow the user to change the theme of the page
 * according to their preference
*/
const changeTheme = (color) =>{
 color.preventDefault();
 const themeOption = document.querySelector("[data-settings-theme]");
 const themeChange = themeOption.value;

 if(themeChange === theme.day){
 document.documentElement.style.setProperty("--color-light", theme.day['light']);
 document.documentElement.style.setProperty("--color-dark", theme.day['dark']);
 }else if(themeChange === theme.night){
 document.documentElement.style.setProperty("--color-light", theme.night['light']);
 document.documentElement.style.setProperty("--color-dark", theme.night['dark']);
 }
   document.querySelector("[data-settings-overlay]").close();
}

const formChange = document.getElementById('settings');
formChange.addEventListener('submit',changeTheme);

// setting the user theme based on the users preffered device theme
const darkModePreff = window.matchMedia('(prefers-color-scheme: dark)').matches;
const themeInit = darkModePreff ? 'night' : 'day';
document.documentElement.style.setProperty('--color-dark', theme[themeInit].dark);
document.documentElement.style.setProperty('--color-light', theme[themeInit].light)





/**genres = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element = 'All Genres'
genres.appendChild(element)

for ([id, name]; Object.entries(genres); i++) {
    document.createElement('option')
    element.value = value
    element.innerText = text
    genres.appendChild(element)
}

data-search-genres.appendChild(genres)

authors = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)

for ([id, name];Object.entries(authors); id++) {
    document.createElement('option')
    element.value = value
    element = text
    authors.appendChild(element)
}

data-search-authors.appendChild(authors)

data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

documentElement.style.setProperty('--color-dark', css[v].dark);
documentElement.style.setProperty('--color-light', css[v].light);
data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

data-list-button.disabled === !(matches.length - [page * BOOKS_PER_PAGE] > 0)

data-list-button.innerHTML === /* html */ /*[
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
]

data-search-cancel.click() { data-search-overlay.open === false }
data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
data-settings-form.submit() { actions.settings.submit }
data-list-close.click() { data-list-active.open === false }

data-list-button.click() {
    document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
    actions.list.updateRemaining()
    page = page + 1
}

data-header-search.click() {
    data-search-overlay.open === true ;
    data-search-title.focus();
}

data-search-form.click(filters) {
    preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    result = []

    for (book; booksList; i++) {
        titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        authorMatch = filters.author = 'any' || book.author === filters.author

        {
            genreMatch = filters.genre = 'any'
            for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
        }

        if titleMatch && authorMatch && genreMatch => result.push(book)
    }

    if display.length < 1 
    data-list-message.class.add('list__message_show')
    else data-list-message.class.remove('list__message_show')
    

    data-list-items.innerHTML = ''
    const fragment = document.createDocumentFragment()
    const extracted = source.slice(range[0], range[1])

    for ({ author, image, title, id }; extracted; i++) {
        const { author: authorId, id, image, title } = props

        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ /*`
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `

        fragment.appendChild(element)
    }
    
    data-list-items.appendChild(fragments)
    initial === matches.length - [page * BOOKS_PER_PAGE]
    remaining === hasRemaining ? initial : 0
    data-list-button.disabled = initial > 0

    data-list-button.innerHTML = /* html */ /*`
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open = false
}

data-settings-overlay.submit; {
    preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay).open === false
}

data-list-items.click() {
    pathArray = Array.from(event.path || event.composedPath())
    active;

    for (node; pathArray; i++) {
        if active break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === id) active = singleBook
        } 
    }
    
    if !active return
    data-list-active.open === true
    data-list-blur + data-list-image === active.image
    data-list-title === active.title
    
    data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
    data-list-description === active.description
}
