import NewsList from "./NewsList";
import Promo from "./Promo";
import PromoBanner from "./PromoBanner";
import Search from "./Search";
import WidgetSection from "./WidgetSection";

/** Виджет основного контента страницы, собранного из отдельных компонентов */
export default function MainPage() {
    return (
        <div className='MainPage'>
            <div className='container'>
                <NewsList />
                <Promo />
            </div>
           <Search />
           <PromoBanner />
           <WidgetSection /> 
       </div> 
    );
}