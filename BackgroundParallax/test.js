document.addEventListener('mousemove', parallax);
        function parallax(e){
            this.querySelectorAll('layer').forEach(Layer =>{
                const speed=layer.getAttribute('data-speed')

                const x=(window.innerWidth-e.pageX*speed)/100
                const y=(window.innerHeight-e.pagey*speed)/100

                layer.style.transform='translateX(${x}px) translateY(${y}px)'
            })
        }