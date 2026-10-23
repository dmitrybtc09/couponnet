/**
 * CouponNet.ru — Модуль нативных HTML5/CSS3 3D-анимаций для бизнеса
 */

const CouponNetAnimations = {
    // Внедряем CSS-стили для 3D-объектов прямо в документ
    initStyles() {
        if (document.getElementById('couponnet-effects-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'couponnet-effects-styles';
        style.innerHTML = `
            /* Общая 3D сцена */
            .stage-3d {
                width: 100%;
                height: 100%;
                perspective: 1000px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            }

            /* 1. АНИМАЦИЯ: ПИЦЦЕРИЯ */
            .pizza-world {
                position: relative;
                width: 200px;
                height: 200px;
                transform-style: preserve-3d;
                transform: rotateX(60deg) rotateZ(-30deg);
                animation: introStage 1.5s ease-out forwards;
            }

            /* Коробка (низ) */
            .pizza-box-bottom {
                position: absolute;
                width: 200px;
                height: 200px;
                background: #f5f5dc;
                border: 4px solid #d2b48c;
                border-radius: 8px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.6);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            /* Пицца внутри */
            .pizza-item {
                width: 170px;
                height: 170px;
                background: #e67e22; /* Корочка */
                border-radius: 50%;
                position: relative;
                box-shadow: inset 0 0 10px #d35400;
            }
            .pizza-cheese {
                position: absolute;
                top: 10px; left: 10px; right: 10px; bottom: 10px;
                background: #f1c40f; /* Сыр */
                border-radius: 50%;
            }
            /* Пепперони */
            .pepperoni {
                position: absolute; width: 25px; height: 25px;
                background: #c0392b; border-radius: 50%;
            }

            /* Крышка коробки */
            .pizza-box-top {
                position: absolute;
                width: 200px;
                height: 200px;
                background: #e74c3c;
                border: 2px solid #c0392b;
                border-radius: 8px;
                top: 0; left: 0;
                transform-origin: top center;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-family: sans-serif;
                font-weight: bold;
                font-size: 24px;
                box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
                animation: openPizzaBox 1.2s 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            }

            /* 2. АНИМАЦИЯ: КОФЕЙНЯ */
            .coffee-world {
                position: relative;
                width: 120px;
                height: 180px;
                transform-style: preserve-3d;
                animation: introCoffee 1.2s ease-out forwards;
            }
            .coffee-cup {
                width: 100%; height: 100%;
                background: linear-gradient(to right, #d35400, #e67e22);
                border-radius: 10px 10px 40px 40px;
                box-shadow: 0 15px 30px rgba(0,0,0,0.5);
                position: relative;
            }
            .coffee-holder {
                position: absolute; top: 40px; width: 100%; height: 50px;
                background: #f39c12; border-radius: 4px;
            }

            /* 3. ОБЩИЙ ЭЛЕМЕНТ: ЗОЛОТАЯ МОНЕТА */
            .coin-html5 {
                position: absolute;
                width: 70px;
                height: 70px;
                background: radial-gradient(circle, #ffd700, #ffa500);
                border-radius: 50%;
                border: 4px double #fff;
                box-shadow: 0 0 20px #ffca28, inset 0 0 10px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                z-index: 10;
                opacity: 0;
                transform: translateZ(0) scale(0.5);
            }

            /* Вылет монеты из пиццы */
            .coin-pizza-fly {
                animation: 
                    coinFlyUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
                    coinSpin 2s 2.8s infinite linear;
            }

            /* Вылет монеты из кофе */
            .coin-coffee-fly {
                animation: 
                    coinFlyCoffee 1.2s 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
                    coinSpin 2s 1.7s infinite linear;
            }

            /* КЛЮЧЕВЫЕ КАДРЫ АНИМАЦИЙ (CSS КЕЙФРЕЙМЫ) */
            @keyframes introStage {
                0% { transform: scale(0.2) rotateX(0deg) rotateZ(0deg); opacity: 0; }
                100% { transform: scale(1) rotateX(60deg) rotateZ(-30deg); opacity: 1; }
            }
            @keyframes openPizzaBox {
                0% { transform: rotateX(0deg); }
                100% { transform: rotateX(-120deg); opacity: 0.9; filter: brightness(0.6); }
            }
            @keyframes introCoffee {
                0% { transform: translateY(200px) scale(0.5); opacity: 0; }
                100% { transform: translateY(0) scale(1); opacity: 1; }
            }
            @keyframes coinFlyUp {
                0% { opacity: 0; transform: translateZ(0) scale(0.5) rotateY(0deg); }
                100% { opacity: 1; transform: translateZ(250px) scale(1.3) rotateY(360deg); }
            }
            @keyframes coinFlyCoffee {
                0% { opacity: 0; transform: translateY(0) scale(0.5) rotateY(0deg); }
                100% { opacity: 1; transform: translateY(-160px) scale(1.4) rotateY(360deg); }
            }
            @keyframes coinSpin {
                0% { transform: translateZ(250px) scale(1.3) rotateY(0deg); }
                50% { transform: translateZ(250px) scale(1.3) rotateY(180deg); }
                100% { transform: translateZ(250px) scale(1.3) rotateY(360deg); }
            }
        `;
        document.head.appendChild(style);
    },

    // Шаблоны верстки для разных бизнесов
    templates: {
        pizza: `
            <div class="pizza-world">
                <!-- Нижняя часть коробки и пицца -->
                <div class="pizza-box-bottom">
                    <div class="pizza-item">
                        <div class="pizza-cheese">
                            <div class="pepperoni" style="top:20px; left:30px;"></div>
                            <div class="pepperoni" style="top:30px; right:20px;"></div>
                            <div class="pepperoni" style="bottom:20px; left:50px;"></div>
                            <div class="pepperoni" style="top:75px; left:70px;"></div>
                        </div>
                    </div>
                </div>
                <!-- Летящая золотая монета -->
                <div class="coin-html5 coin-pizza-fly">🪙</div>
                <!-- Крышка коробки -->
                <div class="pizza-box-top">🍕 PIZZA</div>
            </div>
        `,
        coffee: `
            <div class="coffee-world">
                <div class="coffee-cup">
                    <div class="coffee-holder"></div>
                </div>
                <div class="coin-html5 coin-coffee-fly" style="top: 40px; left: 25px;">🪙</div>
            </div>
        `,
        default: `
            <div class="coin-html5" style="opacity:1; transform:scale(1.8); animation: coinSpin 3s infinite linear;">🪙</div>
        `
    },

    // Главная функция рендеринга
    render(businessType, containerId) {
        this.initStyles(); // Инициализируем стили
        const container = document.getElementById(containerId);
        if (!container) return;

        // Вставляем чистую HTML-структуру
        container.innerHTML = `
            <div class="stage-3d">
                ${this.templates[businessType] || this.templates.default}
            </div>
        `;
    }
};
