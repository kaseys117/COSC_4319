<!-- Mobile landing page for WellMo -->
<script>
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
    let activeDot = 1;
</script>

<div class="container">
    <div id="carousel">
        <div class="slide-1" use:inView on:enter={() => (activeDot = 1)}>
            <div class="content">
                <h2>Welcome to WellMo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div class="slide-2" use:inView on:enter={() => (activeDot = 2)}>
            <div class="content">
                <h2>Log your day</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div class="slide-3" use:inView on:enter={() => (activeDot = 3)}>
            <div class="content">
                <h2>View your patterns</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
    <div class="dots">
        <span class:active={activeDot === 1} />
        <span class:active={activeDot === 2} />
        <span class:active={activeDot === 3} />
    </div>
    <div class="buttons">
        <a href="/auth/register">
            <button class="register">Sign Up</button>
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
        gap: 1em;
        padding: 2em;
    }
    #carousel {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        gap: 1em;
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
        outline: 1px solid var(--color-primary-500);
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
</style>
