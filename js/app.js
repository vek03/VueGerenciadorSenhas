const List = {
  template: `<h1>GERENCIADOR DE SENHAS</h1>`
}
const app = Vue.createApp({
  components: {
    List
  },
   data() {
        return {
            SENHAS: [],
            count: 0
          }
        },
        methods: {
            gerarSenha(){
                console.log('Gerar Normal');
        
                const senha = {
                    id: this.count,
                    tipo: 'normal'
                };
        
                this.SENHAS.push(senha);
        
                this.exibir();
                this.count++;
            },
            gerarSenhaEspecial(){
                console.log('Gerar Especial')
        
                const senha = {
                    id: this.count,
                    tipo: 'especial'
                };
        
                var temp_especiais = this.SENHAS.filter((item) => item.tipo == 'especial');
        
                var maior_elemento = {
                    id: 0,
                    tipo: 'especial'
                };
        
                temp_especiais.forEach((item) => {
                    if(item.id > maior_elemento.id){
                        maior_elemento = item
                    }
                });
        
                var index = this.SENHAS.indexOf(maior_elemento);
        
                if(index == -1){
                    this.SENHAS.unshift(senha);
                }
                else{
                    this.SENHAS.splice(index + 1, 0, senha);
                }
        
                this.exibir();
                this.count++;
            },
            atenderNormal(){
                console.log('Atender Normal');
        
                var temp = [];
        
                var senha = this.SENHAS.find((item) => item.tipo == 'normal');
        
                this.SENHAS.forEach((item) => {
                    if(item.id != senha?.id){
                        temp.push(item);
                    }
                });
        
                this.SENHAS = temp;
        
                this.exibir();
                this.count++;
            },
            atenderEspecial(){
                console.log('Atender Especial')
        
                var temp = [];
        
                var senha = this.SENHAS.find((item) => item.tipo == 'especial');
        
                this.SENHAS.forEach((item) => {
                    if(item.id != senha?.id){
                        temp.push(item);
                    }
                });
        
                this.SENHAS = temp;
        
                this.exibir();
                this.count++;
            },
            exibir(){
                const senhas = document.getElementById("senhas");
        
                var only_senhas = '';
        
                this.SENHAS.forEach((item) => {
                    if(item.id){
                        only_senhas += item.id + ', '
                    }
                })
        
                senhas.innerHTML = only_senhas;
            }
          },
        template: 
        `
        <div>
          <button @click="gerarSenha">Gerar Senha</button>
          <button @click="gerarSenhaEspecial">Gerar Senha Especial</button>

          <br><br><br>

          <h2>SENHAS:</h2>
          <div id="senhas"></div>

          <br><br><br>

          <button @click="atenderNormal">Atender Normal</button>
          <button @click="atenderEspecial">Atender Especial</button>
        </div>
        `,
   })
   
   app.mount('#app')
 