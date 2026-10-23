/**
 * CouponNet.ru — Модуль динамических WebAR-анимаций для бизнеса
 */

const CouponNetAnimations = {
    // 1. Анимация для Пиццерии (Коробка открывается, вылетает монета)
    pizza: `
        
            <!-- Нижняя часть коробки -->
            <a-box position="0 -0.1 0" width="2.2" height="0.1" depth="2.2" color="#f5f5dc" roughness="0.8">
                <!-- Пицца -->
                <a-cylinder position="0 0.06 0" radius="0.9" height="0.04" color="#e67e22" roughness="0.9">
                    <a-cylinder position="0 0.01 0" radius="0.8" height="0.04" color="#f1c40f" roughness="0.6">
                        <!-- Пепперони -->
                        <a-circle position="0.3 0.03 0.2" radius="0.12" color="#c0392b" rotation="-90 0 0"></a-circle>
                        <a-circle position="-0.4 0.03 -0.3" radius="0.12" color="#c0392b" rotation="-90 0 0"></a-circle>
                        <a-circle position="0.2 0.03 -0.4" radius="0.12" color="#c0392b" rotation="-90 0 0"></a-circle>
                        <a-circle position="-0.2 0.03 0.4" radius="0.12" color="#c0392b" rotation="-90 0 0"></a-circle>
                    </a-cylinder>
                </a-cylinder>
            </a-box>
            <!-- Верхняя крышка -->
            
                <a-box position="0 0 1.1" width="2.2" height="0.06" depth="2.2" color="#e74c3c" roughness="0.8">
                    <a-circle position="0 0.04 0" radius="0.4" color="#fff" rotation="-90 0 0"></a-circle>
                </a-box>
                <a-animation attribute="rotation" from="0 0 0" to="-110 0 0" dur="1200" delay="500" easing="ease-out" fill="forwards"></a-animation>
            
            <!-- Вылетающая монета -->
            
                <a-cylinder radius="0.4" height="0.06" rotation="90 0 0" color="#ffca28" metalness="0.9" roughness="0.2">
                    <a-cylinder radius="0.3" height="0.07" color="#ffd54f" metalness="0.9" roughness="0.1"></a-cylinder>
                </a-cylinder>
                <a-animation attribute="position" from="0 0.1 0" to="0 1.8 0" dur="1000" delay="1200" easing="ease-out" fill="forwards"></a-animation>
                <a-animation attribute="rotation" dur="2000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>                    
    `,

    // 2. Анимация для Кофеен (Стаканчик кофе, из которого поднимаются ароматные монеты)
    coffee: `
        
            <!-- Стаканчик кофе -->
            <a-cone radius-bottom="0.5" radius-top="0.7" height="1.8" color="#d35400" roughness="0.5">
                <!-- Белая крышка -->
                <a-cylinder position="0 0.95 0" radius="0.72" height="0.1" color="#ffffff"></a-cylinder>
                <!-- Манжета/Держатель -->
                <a-cylinder position="0 0 0" radius="0.63" height="0.6" color="#f39c12" roughness="0.9"></a-cylinder>
            </cone>
            <!-- Монета, вылетающая из стаканчика вверх в облаке пара -->
            
                <a-cylinder radius="0.35" height="0.06" rotation="90 0 0" color="#ffca28" metalness="0.9">
                    <a-cylinder radius="0.25" height="0.07" color="#ffd54f" metalness="0.9"></a-cylinder>
                </a-cylinder>
                <a-animation attribute="position" from="0 1 0" to="0 2.5 0" dur="1500" delay="300" easing="ease-out" fill="forwards"></a-animation>
                <a-animation attribute="rotation" dur="1500" to="360 360 0" repeat="indefinite" easing="linear"></a-animation>
            
        
    `,

    // 3. Универсальная анимация по умолчанию (Просто парящая большая монета)
    default: `
        
            <a-cylinder radius="1.2" height="0.15" rotation="90 0 0" color="#ffca28" roughness="0.3" metalness="0.8">
                <a-cylinder radius="0.9" height="0.17" color="#ffd54f" roughness="0.2" metalness="0.9"></a-cylinder>
            </a-cylinder>
            <a-animation attribute="rotation" dur="2500" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
            <a-animation attribute="position" dur="1500" direction="alternate" to="0 0.8 0" repeat="indefinite" easing="ease-in-out"></a-animation>
        
    `,

    // Функция динамического рендеринга сцены
    render(businessType, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // Очищаем старую сцену, оставляя только базовые элементы (камеру и свет)
        container.innerHTML = `
            
            <a-ambient-light color="#ffffff" intensity="0.7"></a-ambient-light>
            <a-directional-light position="2 4 3" intensity="0.8" color="#fff"></a-directional-light>
            ${this[businessType] || this.default}
        `;
    }
};
