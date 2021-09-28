/** Отображает категории поиска - название и ссылку на категорию */
export default function SearchItem({name, link}) {
    return (
        <div className='SearchItem'>
            <a href={link}>{name}</a>
        </div>
    )
}