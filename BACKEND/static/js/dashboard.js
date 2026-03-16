        const btn = document.getElementById('generateBtn');
        const loader = document.getElementById('loadingState');
        const results = document.getElementById('resultArea');

        document.querySelectorAll('.sub-option').forEach(sub => {
            sub.addEventListener('change', (e) => {
                if(e.target.checked) {
                    const parentCard = e.target.closest('.platform-card');
                    const parentCheckbox = parentCard.querySelector('input[name="platform"]');
                    parentCheckbox.checked = true;
                }
            });
        });

        // Helper to copy text to clipboard
        function copyToClipboard(text, btnElement) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                const originalContent = btnElement.innerHTML;
                btnElement.innerHTML = 'Copied!';
                btnElement.classList.replace('bg-indigo-600', 'bg-emerald-500');
                setTimeout(() => {
                    btnElement.innerHTML = originalContent;
                    btnElement.classList.replace('bg-emerald-500', 'bg-indigo-600');
                }, 2000);
            } catch (err) {
                console.error('Copy failed', err);
            }
            document.body.removeChild(textarea);
        }

        btn.addEventListener('click', () => {
            const featureName = document.getElementById('feature-name').value;
            const checkedPlatforms = document.querySelectorAll('input[name="platform"]:checked');

            if(!featureName) {
                document.getElementById('feature-name').focus();
                return;
            }

            if(checkedPlatforms.length === 0) {
                btn.innerText = "Select a Platform First";
                btn.classList.add('bg-red-500');
                setTimeout(() => {
                    btn.innerText = "Generate Launch Kit";
                    btn.classList.remove('bg-red-500');
                }, 2000);
                return;
            }
            
            loader.classList.remove('hidden');
            results.classList.add('hidden');
            
            setTimeout(() => {
                loader.classList.add('hidden');
                results.classList.remove('hidden');
                
                const resultsContainer = document.getElementById('resultsContent');
                resultsContainer.innerHTML = '';
                
                checkedPlatforms.forEach(p => {
                    const platformName = p.value;
                    const contentText = `🚀 Introducing ${featureName}!\n\nNow you can automatically optimize your social posts for engagement on ${platformName}.\n\n#AI #ContentMarketing #Launch #SocialLaunchAI`;
                    
                    const div = document.createElement('div');
                    div.className = "bg-slate-50 rounded-xl p-5 border border-slate-200 mb-4 transition-all hover:shadow-md h-full flex flex-col";
                    
                    // Create card structure
                    div.innerHTML = `
                        <div class="flex items-center justify-between mb-3">
                            <span class="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-[10px] font-bold uppercase">${platformName} Post</span>
                            <button class="copy-btn text-[10px] bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                                Copy Post
                            </button>
                        </div>
                        <div class="content-text flex-grow whitespace-pre-wrap text-sm text-slate-700 leading-relaxed font-medium bg-white p-4 rounded-lg border border-slate-100">${contentText}</div>
                    `;

                    // Attach copy event
                    div.querySelector('.copy-btn').onclick = function() {
                        copyToClipboard(contentText, this);
                    };

                    resultsContainer.appendChild(div);
                });
            }, 1500);
        });