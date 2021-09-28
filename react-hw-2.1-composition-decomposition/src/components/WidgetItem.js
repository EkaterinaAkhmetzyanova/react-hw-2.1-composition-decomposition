/* eslint-disable jsx-a11y/anchor-is-valid */

/** Отдельный виджет, включающий в себя название, ссылку и краткий контент */
export default function WidgetItem({title, link, content}) {
    return (
        <div className='WidgetItem'>
            <a href={link}><h2>{title}</h2></a>
            <div className='WidgetContent'>
                <div>{content}</div>
            </div>
        </div>
    );
}