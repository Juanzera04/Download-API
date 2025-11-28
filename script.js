// script.js
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', function() {
        // Cria um link temporário para download
        const link = document.createElement('a');
        link.href = 'app.exe'; // NOME CORRIGIDO PARA app.exe
        link.download = 'app.exe'; // Nome que aparecerá no download
        
        // Adiciona o link ao DOM, clica e remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Feedback visual para o usuário
        showDownloadFeedback();
    });
    
    function showDownloadFeedback() {
        // Altera temporariamente o botão para mostrar confirmação
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '✅ Download Iniciado!';
        downloadBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
        
        // Restaura o botão após 2 segundos
        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
            downloadBtn.style.background = 'linear-gradient(135deg, #8c52ff, #5ce1e6)';
        }, 2000);
        
        // Log no console (pode remover em produção)
        console.log('Download solicitado em: ' + new Date().toLocaleString());
    }
    
    // Efeito de digitação no título (opcional)
    function typeWriterEffect() {
        const title = document.querySelector('.header h1');
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }
    
    // Descomente a linha abaixo se quiser o efeito de digitação
    // typeWriterEffect();
});