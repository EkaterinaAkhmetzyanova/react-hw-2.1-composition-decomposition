import SearchItem from "./SearchItem";

/** Виджет для блока поиска, включает в себя логотип, категории поиска, строку поиска и подпись */
export default function Search() {
    return (
        <div className='SearchWidget'>
            <div className='SearchLogo'></div>
            <div className='SearchForm'>
               <div className='SearchOptions'>
                <SearchItem name='Видео' link='#' />
                <SearchItem name='Картинки' link='#' />
                <SearchItem name='Новости' link='#' />
                <SearchItem name='Карты' link='#' />
                <SearchItem name='Маркет' link='#' />
                <SearchItem name='Переводчик' link='#' />
                <SearchItem name='Эфир' link='#' />
                <SearchItem name='еще' link='#' />
              </div>
            <div className='SearchInput'></div> 
            <div className='SearchSubtitle'>Найдется все...</div>
            </div>
            
            
        </div>
    );
}