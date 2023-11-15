<!-- Mobile landing page for WellMo -->
<script>
    import undraw_explore from "$lib/assets/undraw_explore.svg";
    import undraw_park from "$lib/assets/undraw_a_day_at_the_park.svg";
    import undraw_charts from "$lib/assets/undraw_charts.svg";
    function inView(node, params = {}) {
        // Used to check when an element is enters or exits the viewport
        let observer;

        const handleIntersect = (e) => {
            const v = e[0].isIntersecting ? "enter" : "exit";
            node.dispatchEvent(new CustomEvent(v));
        };

        const setObserver = ({ root, top, bottom }) => {
            const marginTop = top ? top * -1 : 0;
            const marginBottom = bottom ? bottom * -1 : 0;
            const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
            const options = { root, rootMargin };
            if (observer) observer.disconnect();
            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(node);
        };

        setObserver(params);

        return {
            update(params) {
                setObserver(params);
            },

            destroy() {
                if (observer) observer.disconnect();
            },
        };
    }
    let activeDot = 1; // Make the first dot active by default
</script>

<div class="container">
    <!-- TODO: Make headings match heigh accross all slides -->
    <div id="carousel">
        <!-- When slide 1 comes into view, activate dot 1 (ie. Make dot 1 solid) -->
        <div class="slide-1" use:inView on:enter={() => (activeDot = 1)}>
            <div class="content">
                <img
                    src={undraw_explore}
                    alt="a person looking at a mountain scene"
                />
                <h2>Welcome to WellMo</h2>
                <p>
                    Your personal wellness companion. Achieve your health and wellness goals by keeping track of your everyday life.
                </p>
            </div>
        </div>
        <!-- When slide 2 comes into view activate dot 2 -->
        <div class="slide-2" use:inView on:enter={() => (activeDot = 2)}>
            <div class="content">
                <img src={undraw_park} alt="A man walking a dog in the park" />
                <h2>Log your day</h2>
                <p>
                    Keep track of how you feel throughout the day, including
                    your sleep, diet, mood, and symptoms.
                </p>
            </div>
        </div>
        <!-- When slide 3 comes into view activate dot 3 -->
        <div class="slide-3" use:inView on:enter={() => (activeDot = 3)}>
            <div class="content">
                <img src={undraw_charts} alt="A person looking at a chart" />
                <h2>View your patterns</h2>
                <p>
                    You can show your doctor your logs so you can both get a better understanding of what's going on.
                </p>
            </div>
        </div>
    </div>
    <div class="dots">
        <!-- Make a certain dot active (solid) depending on the value of activeDot -->
        <span class:active={activeDot === 1} />
        <span class:active={activeDot === 2} />
        <span class:active={activeDot === 3} />
    </div>
    <div class="buttons">
        <a href="/auth/register">
            <button class="register">Register</button>
        </a>
        <a href="/auth/login">
            <button class="login">Log In</button>
        </a>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto auto;
        /* justify-items: center; */
        align-items: stretch;
        height: 100vh;
        gap: 0.5em;
        padding: 2em;
    }
    #carousel {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        gap: 4em;
    }
    #carousel::-webkit-scrollbar {
        display: none;
    }
    .slide-1,
    .slide-2,
    .slide-3 {
        flex: 0 0 auto;
        width: 100%;
        height: 100%;
        scroll-snap-align: start;
        /* background-color: green; */
    }
    .dots {
        justify-self: center;
    }
    .dots > * {
        display: inline-block;
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background-color: var(--color-surface-200);
        margin: 0.5em;
    }
    .active {
        background-color: var(--color-primary-500);
    }
    .login {
        background-color: var(--color-surface-50);
        color: var(--theme-font-color-base);
        border: 1px solid var(--color-primary-500);
    }
    .register {
        background-color: var(--color-surface-200);
        color: var(--theme-font-color-base);
        margin-bottom: 0.5em;
    }
    button,
    a {
        width: 100%;
        height: 4.5em;
    }
    img {
        margin: 4em 0;
    }
</style>
