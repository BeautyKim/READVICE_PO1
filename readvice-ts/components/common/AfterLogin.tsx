import { HeadTitle } from "./HeadTitle"

export function AfterLogin(){
    return(
        <div>
            <HeadTitle title="Home"/>
            <section>
                <article>
                    <p>로그인 후 페이지입니다</p>
                    <img src="http://image.yes24.com/goods/108887930/XL" className="img-fluid rounded mx-auto d-block w-25 h-50 p-3" alt="추천책" />
                </article>
            </section>
            <section>
                <article>

                </article>
            </section>
        </div>
    )
}
