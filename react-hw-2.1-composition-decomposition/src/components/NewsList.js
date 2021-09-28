/* eslint-disable jsx-a11y/anchor-is-valid */
import NewsItem from "./NewsItem";
import CurrencyWidget from './CurrencyWidget';

/** Виджет для отображения списка новостей */
export default function NewsList() {
    return (
        <div className='NewsSection'>
            <div className='NewsOptions'>
               <a href="#" className='NewsOptionsLink selected'><h2>Сейчас в СМИ</h2></a>
               <a href="#" className='NewsOptionsLink'><h2>В Германии</h2></a>
               <a href="#" className='NewsOptionsLink'><h2>Рекомендуем</h2></a>
            </div>
            <div className='Date'></div>
            <div className='NewsList'>
                <NewsItem title='Text'/>
                <NewsItem title='TextText'/>
                <NewsItem title='TextTextText'/>
                <CurrencyWidget />
            </div>
        </div>
    )
}