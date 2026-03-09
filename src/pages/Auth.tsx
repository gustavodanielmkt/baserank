import { useState } from 'react';
import { LogIn, UserPlus, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
            } else {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                alert('Cadastro realizado! O BaseRank te dá as boas-vindas.');
            }
        } catch (error: any) {
            if (error.message.includes('Invalid login credentials')) {
                setErrorMsg('E-mail ou senha incorretos.');
            } else if (error.message.includes('User already registered')) {
                setErrorMsg('Já existe um usuário com esse e-mail no nosso banco.');
            } else {
                setErrorMsg(error.message || 'Ocorreu um erro no processo. Tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen font-display bg-background-dark flex items-center justify-center p-4 overflow-hidden">
            {/* Imagem de Fundo Estilosa com Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 scale-105"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2000&auto=format&fit=crop")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-background-dark/95 via-background-dark/80 to-primary/40 z-0 backdrop-blur-sm"></div>

            {/* Círculos brilhantes do cenário (Micro-interações) */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out relative w-full max-w-md z-10 bg-white/[0.03] dark:bg-black/40 backdrop-blur-xl border border-white/10 dark:border-white/[0.05] rounded-[2.5rem] p-8 sm:p-10 shadow-2xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="h-20 w-20 bg-gradient-to-tr from-primary to-emerald-400 rounded-3xl flex items-center justify-center shadow-lg shadow-primary/30 mb-5 transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
                        <span className="text-4xl font-black text-background-dark -rotate-[5deg]">BR</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-center">BaseRank</h2>
                    <p className="text-emerald-100/70 text-sm font-medium mt-2 text-center">
                        {isLogin ? 'Bem-vindo de volta ao campo' : 'Inicie sua jornada ao topo'}
                    </p>
                </div>

                {errorMsg && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex items-center gap-3 text-red-300 text-sm font-medium mb-6 animate-in fade-in zoom-in-95 duration-300">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p className="leading-tight">{errorMsg}</p>
                    </div>
                )}

                <form onSubmit={handleAuth} className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest pl-1">E-mail de acesso</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-14 bg-black/40 border border-white/5 rounded-2xl pl-12 pr-4 text-white font-medium placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-inner"
                                placeholder="atleta@clube.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex justify-between items-end pl-1 pr-1">
                            <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Senha segura</label>
                            {isLogin && <button type="button" className="text-xs text-primary/70 font-semibold hover:text-primary transition-colors">Esqueceu a senha?</button>}
                        </div>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-colors">
                                <Lock className="w-5 h-5" />
                            </div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-14 bg-black/40 border border-white/5 rounded-2xl pl-12 pr-4 text-white font-medium placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-inner"
                                placeholder="••••••••"
                                minLength={6}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 mt-8 relative overflow-hidden bg-gradient-to-r from-primary to-emerald-400 text-background-dark font-black tracking-wide text-[15px] uppercase rounded-2xl shadow-[0_0_20px_rgba(33,196,93,0.3)] hover:shadow-[0_0_30px_rgba(33,196,93,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:active:scale-100"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            {loading ? (
                                <>Processando <Loader2 className="w-5 h-5 animate-spin" /></>
                            ) : isLogin ? (
                                <>Entrar no Vestiário <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                            ) : (
                                <>Assinar Contrato <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" /></>
                            )}
                        </span>
                    </button>
                </form>

                <div className="mt-8 text-center text-[13px] font-medium text-white/50">
                    {isLogin ? (
                        <p>Ainda não é um atleta? <button onClick={() => setIsLogin(false)} className="text-primary hover:text-white transition-colors ml-1 font-bold">Cadastre-se</button></p>
                    ) : (
                        <p>Já tem uma conta? <button onClick={() => setIsLogin(true)} className="text-primary hover:text-white transition-colors ml-1 font-bold">Faça Login</button></p>
                    )}
                </div>
            </div>
        </div>
    );
}
