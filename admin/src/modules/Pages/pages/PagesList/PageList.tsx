import React from 'react';
import s from './PageList.module.scss'
import {BaseContainer} from "../../../../common/components/BaseContainer/BaseContainer";

interface IPageList {
    classname?: string,
    children?: React.ReactNode
}

const PageList: React.FC<IPageList> = ({}) => {
    return (
        <section className={s.page_list}>
            <BaseContainer>
                <div className={s.page_list_inner}>

                </div>
            </BaseContainer>

        </section>
    );
};

export default PageList