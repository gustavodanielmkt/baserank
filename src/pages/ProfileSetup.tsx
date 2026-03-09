import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { User, Calendar, Flag, Shield, Activity, Save, Loader2, ArrowRight, Camera } from 'lucide-react';

export function ProfileSetup() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [formData, setFormData] = useState({
        full_name: '',
        birth_date: '',
        nationality: '',
        position: '',
        preferred_foot: '',
        height: '',
        weight: '',
        club: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) throw new Error('Nenhum usuário logado. Faça o login novamente.');

            const { error } = await supabase
                .from('athlete_profiles')
                .upsert({
                    id: user.id, // O ID deve ser o mesmo do auth.users
                    ...formData,
                    height: Number(formData.height),
                    weight: Number(formData.weight)
                });

            if (error) throw error;

            // Sucesso! Redireciona para o Dashboard (Início)
            navigate('/');

        } catch (error: any) {
            console.error(error);
            setErrorMsg(error.message || 'Ocorreu um erro ao salvar seu perfil.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background-dark font-display text-slate-100 pb-20 pt-10 px-4 flex flex-col items-center">
            {/* Background Decorativo */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-700/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-full max-w-2xl z-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="text-center mb-10">
                    <div className="inline-flex h-16 w-16 bg-gradient-to-tr from-primary to-emerald-400 rounded-2xl items-center justify-center shadow-lg shadow-primary/20 mb-4 transform -rotate-3">
                        <User className="text-background-dark w-8 h-8 rotate-3" />
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-white mb-2">Configure seu Perfil</h1>
                    <p className="text-slate-400">Preencha seus dados reais para o algoritmo do BaseRank avaliar suas métricas com precisão.</p>
                </div>

                {errorMsg && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 text-red-300 text-sm font-medium mb-6 animate-in fade-in">
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8 bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">

                    {/* Seção 1: Identificação */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-white/10 pb-2">
                            <User className="w-5 h-5" /> Identificação
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5 sm:col-span-2">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Nome Completo</label>
                                <input
                                    type="text" name="full_name" required value={formData.full_name} onChange={handleChange}
                                    className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="Ex: João Silva Santos"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Data de Nascimento</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        type="date" name="birth_date" required value={formData.birth_date} onChange={handleChange}
                                        className="w-full h-12 bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all [&::-webkit-calendar-picker-indicator]:invert-[0.8]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Nacionalidade</label>
                                <div className="relative">
                                    <Flag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        type="text" name="nationality" required value={formData.nationality} onChange={handleChange}
                                        className="w-full h-12 bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        placeholder="Ex: Brasileiro"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Seção 2: Atributos Físicos */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-white/10 pb-2">
                            <Activity className="w-5 h-5" /> Atributos Físicos
                        </h3>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Altura (cm)</label>
                                <input
                                    type="number" name="height" required min="100" max="230" value={formData.height} onChange={handleChange}
                                    className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="Ex: 175"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Peso (kg)</label>
                                <input
                                    type="number" name="weight" step="0.1" required min="30" max="150" value={formData.weight} onChange={handleChange}
                                    className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="Ex: 68.5"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Seção 3: Informações Técnicas */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-white/10 pb-2">
                            <Shield className="w-5 h-5" /> Informações Técnicas
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Pé Dominante</label>
                                <select
                                    name="preferred_foot" required value={formData.preferred_foot} onChange={handleChange}
                                    className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
                                >
                                    <option value="" disabled className="text-slate-500">Selecione...</option>
                                    <option value="Destro">Destro</option>
                                    <option value="Canhoto">Canhoto</option>
                                    <option value="Ambidestro">Ambidestro</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Posição Principal</label>
                                <select
                                    name="position" required value={formData.position} onChange={handleChange}
                                    className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
                                >
                                    <option value="" disabled className="text-slate-500">Selecione uma posição...</option>
                                    <option value="Goleiro">Goleiro (GOL)</option>
                                    <option value="Zagueiro">Zagueiro (ZAG)</option>
                                    <option value="Lateral Direito">Lateral Direito (LD)</option>
                                    <option value="Lateral Esquerdo">Lateral Esquerdo (LE)</option>
                                    <option value="Volante">Volante (VOL)</option>
                                    <option value="Meio-Campo">Meio-Campo (MC)</option>
                                    <option value="Meia Atacante">Meia Atacante (MEI)</option>
                                    <option value="Ponta Esquerda">Ponta Esquerda (PE)</option>
                                    <option value="Ponta Direita">Ponta Direita (PD)</option>
                                    <option value="Centroavante">Centroavante (CA)</option>
                                </select>
                            </div>

                            <div className="space-y-1.5 sm:col-span-2">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Clube Atual (Opcional)</label>
                                <input
                                    type="text" name="club" value={formData.club} onChange={handleChange}
                                    className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="Ex: BaseRank FC ou Sem Clube"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 mt-8 bg-primary hover:bg-emerald-400 text-background-dark font-black tracking-wide text-[15px] uppercase rounded-2xl shadow-[0_0_20px_rgba(33,196,93,0.3)] hover:shadow-[0_0_30px_rgba(33,196,93,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 group"
                    >
                        {loading ? (
                            <>Salvando <Loader2 className="w-5 h-5 animate-spin" /></>
                        ) : (
                            <>Salvar Perfil e Começar <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
