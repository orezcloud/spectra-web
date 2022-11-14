import Body from '../layouts/body';
import Hero from '../sections/common/hero';
import Header from '../sections/header/header';
import {DefaultSection} from '../layouts/section-layouts';
import SectionCard from '../layouts/section-card';


export default function Products() {
    return (
        <Body>
            <Header/>
            <Hero/>
            <DefaultSection name={'products'} padding={'none'}>
                <SectionCard minusMargin={true}>
                    <h1>Products</h1>
                    <div className="p-ph"><h2 className="u-fade js-anim is-active">わたしたちがめざすもの</h2>
                        <section data-num="01" className="p-ph__sec u-fade js-anim is-active"><h3 data-title="MISSION"
                                                                                                  className="p-ph__sec__title">使命</h3>
                            <p className="p-ph__sec__bold">e-concept standard<br/>イーコンセプトスタンダード</p> <p
                                className="p-ph__sec__text">日々の暮らしの中の様々な基準がイーコンセプトのアイディアで溢れる</p></section>
                        <section className="p-ph__improve">
                            <div className="p-ph__improve__header u-fade js-anim"><h3
                                className="p-ph__improve__title">磨こう10のチカラ</h3> <p
                                className="p-ph__improve__text">improve<br/>oneself</p></div>
                            <ul className="p-ph__improve__list">
                                <li data-num="01" className="u-fade js-anim"><h4>行動力</h4> <p>いけると思った事はやってみよう<br/>その行動が成功をもたらす
                                </p></li>
                                <li data-num="02" className="u-fade js-anim"><h4>提案力</h4> <p>期待に応えるのではなく、期待を超えていこう<br/>期待以上の事をされたとき、人は感動を覚える
                                </p></li>
                                <li data-num="03" className="u-fade js-anim"><h4>先見力</h4> <p>先の先、大局を意識しよう<br/>不安と準備が人の安心に変わる
                                </p></li>
                                <li data-num="04" className="u-fade js-anim"><h4>吸収力</h4> <p>周囲にいるすべての人を尊敬しよう<br/>何事にも寛容に何事にも柔軟に<br/>すべての事に学びの果実が生っている
                                </p></li>
                                <li data-num="05" className="u-fade js-anim"><h4>洞察力</h4> <p>変化に気づき、本質を見抜こう<br/>解決のヒントは割と単純な事<br/>その単純が意外と重要
                                </p></li>
                                <li data-num="06" className="u-fade js-anim"><h4>伝達力</h4> <p>シンプルさを追求し、わかりやすさを極めよう<br/>大切なのは、どう伝えたかではなく、どう伝わったのか
                                </p></li>
                                <li data-num="07" className="u-fade js-anim"><h4>発想力</h4> <p>思考を開放し、眠った好奇心と探求心を刺激しよう<br/>ワクワクがなければ素敵なアイディアはうまれない
                                </p></li>
                                <li data-num="08" className="u-fade js-anim"><h4>人間力</h4> <p>自信をもって謙虚でいよう<br/>慢心せずに卑屈にならずに
                                </p></li>
                                <li data-num="09" className="u-fade js-anim"><h4>継続力</h4> <p>すこしずつ自分の限界を超えていこう<br/>日々の変化に対応し、昨日より何かを変えていく<br/>毎日コツコツ、しつこい程に
                                </p></li>
                                <li data-num="10" className="u-fade js-anim"><h4>組織力</h4> <p>個の熱中の連鎖で集の熱狂を生み出そう<br/>その熱狂こそ個では味わえない集の醍醐味
                                </p></li>
                            </ul>
                        </section>
                    </div>
                </SectionCard>
            </DefaultSection>
        </Body>
    )
}
