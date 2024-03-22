async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
        textarea = main.querySelector(`div[contenteditable="true"]`)

    if(!textarea) throw new Error("Não há uma conversa aberta")

    for(const line of lines){
        console.log(line)

        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));

        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);

        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }

    return lines.length;
}

enviarScript(`1
00:00:06,520 --> 00:00:10,520
- Art Subs -
15 anos fazendo Arte para você!

2
00:00:10,521 --> 00:00:13,521
Legenda
- Murrice -

3
00:00:13,522 --> 00:00:16,522
Legenda
- LaCroix -

4
00:00:16,523 --> 00:00:19,523
Legenda
- Madu21 -

5
00:00:19,524 --> 00:00:22,524
Legenda
- Durenkian -

6
00:00:22,525 --> 00:00:25,525
Legenda
- p.alonso -

7
00:00:25,526 --> 00:00:28,526
Legenda
- BethRockefeller -

8
00:00:28,527 --> 00:00:31,527
Legenda
- chereguedel -

9
00:00:31,528 --> 00:00:34,528
Legenda
- Spa -

10
00:00:34,529 --> 00:00:37,529
Revisão
- NoriegaRJ -

11
00:00:58,976 --> 00:01:02,536
PROMETEU ROUBOU
O FOGO DOS DEUSES

12
00:01:02,537 --> 00:01:05,773
E DEU À HUMANIDADE.

13
00:01:05,774 --> 00:01:08,943
POR ISSO,
ELE FOI ACORRENTADO A UM ROCHEDO

14
00:01:08,944 --> 00:01:12,447
E TORTURADO POR TODA A ETERNIDADE.

15
00:01:18,479 --> 00:01:20,024
Dr. Oppenheimer.

16
00:01:20,325 --> 00:01:21,625
1. FISSÃO

17
00:01:21,626 --> 00:01:23,116
Dr. Oppenheimer.

18
00:01:23,777 --> 00:01:25,927
Já que começamos,
acredito que você tenha

19
00:01:25,928 --> 00:01:27,778
uma declaração para ler
aos registros.

20
00:01:29,425 --> 00:01:30,757
Sim, Meritíssimo.

21
00:01:30,758 --> 00:01:33,252
Não somos juízes, doutor.

22
00:01:33,253 --> 00:01:34,553
Não.

23
00:01:35,030 --> 00:01:36,430
Claro.

24
00:01:41,636 --> 00:01:44,604
Membros do conselho de segurança,

25
00:01:44,605 --> 00:01:47,129
a tão falada
informação prejudicial

26
00:01:47,130 --> 00:01:50,220
em sua acusação a mim não pode
ser entendida de forma justa,

27
00:01:50,221 --> 00:01:53,864
exceto no contexto
da minha vida e meu trabalho.

28
00:01:54,364 --> 00:01:55,800
Por quanto tempo ele depôs?

29
00:01:55,801 --> 00:01:57,101
2. FUSÃO

30
00:01:57,102 --> 00:01:58,686
Para falar a verdade,
esqueci.

31
00:02:00,088 --> 00:02:02,089
Toda a audiência
durou um mês.

32
00:02:02,090 --> 00:02:03,556
Uma provação, é?

33
00:02:03,557 --> 00:02:05,227
Bom, eu só li as transcrições.

34
00:02:07,948 --> 00:02:09,998
Quem gostaria de justificar
toda sua vida?

35
00:02:09,999 --> 00:02:11,950
- Você não estava lá?
- Como presidente,

36
00:02:11,951 --> 00:02:13,251
não era permitido estar.

37
00:02:13,252 --> 00:02:15,436
Eles vão mesmo perguntar
sobre isso?

38
00:02:15,770 --> 00:02:17,873
- Foi há anos...
- Quatro anos atrás...

39
00:02:17,874 --> 00:02:19,174
Cinco.

40
00:02:19,808 --> 00:02:21,574
Oppenheimer
ainda divide os EUA.

41
00:02:21,575 --> 00:02:23,700
O comitê vai querer saber
a sua posição.

42
00:02:24,379 --> 00:02:26,081
O senador Thurmond
pediu para dizer

43
00:02:26,082 --> 00:02:28,303
para você não sentir
que está sob julgamento.

44
00:02:28,304 --> 00:02:31,319
Engraçado, não senti
até você falar.

45
00:02:31,320 --> 00:02:33,421
- De verdade, sr. Strauss...
- Almirante.

46
00:02:33,950 --> 00:02:36,505
Almirante Strauss.
É uma formalidade.

47
00:02:36,506 --> 00:02:39,106
O Presidente Eisenhower
o quer no Gabinete.

48
00:02:39,107 --> 00:02:40,807
Ao senado só resta
confirmar você.

49
00:02:40,808 --> 00:02:42,831
E se falarem de Oppenheimer?

50
00:02:42,832 --> 00:02:45,133
Quando falarem dele,
responda honestamente.

51
00:02:45,134 --> 00:02:47,814
Nenhum senador pode negar
que você cumpriu seu dever.

52
00:02:47,815 --> 00:02:49,870
Será incômodo.

53
00:02:49,871 --> 00:02:52,007
Quem gostaria de justificar
toda sua vida?

54
00:02:56,945 --> 00:02:59,647
Por que você deixou
os Estados Unidos?

55
00:03:01,749 --> 00:03:05,186
Eu... queria estudar
a nova física.

56
00:03:05,187 --> 00:03:06,721
Não podia ser aqui?

57
00:03:07,171 --> 00:03:09,071
Achei que Berkeley
era um dos destaques

58
00:03:09,072 --> 00:03:10,731
no departamento
de física teórica.

59
00:03:10,732 --> 00:03:13,150
Sim. Quando eu o montei.

60
00:03:13,451 --> 00:03:15,259
Mas primeiro,
tive que ir à Europa.

61
00:03:15,260 --> 00:03:18,299
Fui para Cambridge
para estudar com Patrick Blackett.

62
00:03:18,300 --> 00:03:20,935
Você era mais feliz lá
do que aqui nos EUA?

63
00:03:20,936 --> 00:03:23,071
- Mais feliz?
- Sim.

64
00:03:27,042 --> 00:03:30,045
Não. Não, eu...

65
00:03:33,048 --> 00:03:34,883
<i>Eu estava com saudade de casa,</i>

66
00:03:35,750 --> 00:03:37,718
imaturo, emocionalmente,

67
00:03:38,887 --> 00:03:44,026
<i>incomodado por visões
de um universo oculto.</i>

68
00:03:55,070 --> 00:03:56,905
Inútil no laboratório.

69
00:04:01,943 --> 00:04:03,682
Jesus, Oppenheimer.

70
00:04:04,329 --> 00:04:06,148
Você conseguiu dormir um pouco?

71
00:04:08,116 --> 00:04:09,416
Comece de novo.

72
00:04:09,417 --> 00:04:11,600
Preciso ir à palestra, senhor.

73
00:04:12,039 --> 00:04:15,090
- Por quê?
- É de Niels Bohr.

74
00:04:17,893 --> 00:04:19,626
Porra, esqueci totalmente.

75
00:04:19,627 --> 00:04:21,830
Está bem. Vamos.

76
00:04:24,166 --> 00:04:25,950
Não, você não, Oppenheimer.

77
00:04:25,951 --> 00:04:27,771
Você terminará
de revestir as placas.

78
00:04:27,772 --> 00:04:29,072
Está vendo?

79
00:04:34,342 --> 00:04:36,188
Não esqueça de limpar tudo!

80
00:04:47,860 --> 00:04:49,310
CIANETO DE POTÁSSIO

81
00:05:07,775 --> 00:05:11,744
<i>A física quântica
não é um passo adiante,</i>

82
00:05:11,745 --> 00:05:15,759
é uma nova forma
de entender a realidade.

83
00:05:15,760 --> 00:05:17,550
Einstein abriu a porta,

84
00:05:17,551 --> 00:05:19,311
agora estamos vendo
o que há dentro,

85
00:05:19,312 --> 00:05:21,789
vendo um mundo
dentro de nosso mundo.

86
00:05:21,790 --> 00:05:27,790
Um mundo de energia e paradoxo
que nem todos podem aceitar.

87
00:06:09,337 --> 00:06:10,804
Sim, com certeza.

88
00:06:10,805 --> 00:06:12,174
Você está bem?

89
00:06:13,408 --> 00:06:15,243
Niels,
conheça J. Robert Oppenheimer.

90
00:06:15,244 --> 00:06:18,544
- O "J." é qual nome?
- Nenhum, aparentemente.

91
00:06:18,545 --> 00:06:21,745
Você estava na minha palestra.
Fez a única pergunta boa.

92
00:06:21,746 --> 00:06:23,246
Ninguém nega seu entendimento.

93
00:06:23,247 --> 00:06:26,310
É o trabalho dele no laboratório
que deixa um pouco a desejar.

94
00:06:26,311 --> 00:06:28,714
- Ouvi que deu a mesma palestra...
- Em Harvard,

95
00:06:28,715 --> 00:06:30,325
e você fez a mesma pergunta.

96
00:06:30,326 --> 00:06:33,253
- Por que perguntou de novo?
- Não gostei da sua resposta.

97
00:06:34,462 --> 00:06:37,499
- Ontem gostou mais?
- Bem mais.

98
00:06:37,500 --> 00:06:39,900
Você pode levantar a pedra
sem estar pronto

99
00:06:39,901 --> 00:06:41,869
para a cobra que é revelada.

100
00:06:41,870 --> 00:06:44,038
Agora,
parece que você está pronto.

101
00:06:44,039 --> 00:06:46,373
Mas não gosta de laboratório?

102
00:06:46,374 --> 00:06:49,613
Então saia de Cambridge
com seus béqueres e poções.

103
00:06:49,614 --> 00:06:52,247
Vá a algum lugar
que deixem você pensar.

104
00:06:53,248 --> 00:06:54,883
Onde?

105
00:06:55,218 --> 00:06:56,550
Göttingen.

106
00:06:56,551 --> 00:06:58,519
- Born?
- Born.

107
00:06:58,520 --> 00:07:00,488
Vá para a Alemanha,
estude com Max Born.

108
00:07:00,489 --> 00:07:03,074
Aprenda os caminhos da teoria.

109
00:07:03,075 --> 00:07:04,375
Eu já os avisarei.

110
00:07:05,217 --> 00:07:06,963
Tem um buraco de minhoca.

111
00:07:08,396 --> 00:07:10,714
- E sua matemática?
- Não está boa o suficiente

112
00:07:10,715 --> 00:07:14,315
- para o físico que ele deseja ser.
- Álgebra é como uma partitura.

113
00:07:14,316 --> 00:07:16,471
O importante não é
saber ler música,

114
00:07:16,472 --> 00:07:20,842
é ser capaz de ouvi-la.
Consegue ouvir a música, Robert?

115
00:07:21,860 --> 00:07:23,328
Sim, consigo.

116
00:07:59,446 --> 00:08:00,946
A TERRA INÚTIL
POR T. S. ELIOT

117
00:08:21,051 --> 00:08:22,701
Stravinsky
A SAGRAÇÃO DA PRIMAVERA

118
00:08:59,451 --> 00:09:00,751
O senador de Wyoming.

119
00:09:01,576 --> 00:09:04,521
Almirante Strauss, me interessa
seu relacionamento

120
00:09:04,522 --> 00:09:06,595
com o Dr. J. Robert Oppenheimer.

121
00:09:06,596 --> 00:09:09,890
- Você o conheceu em 1947?
- Correto.

122
00:09:10,399 --> 00:09:12,987
Você era comissário
da Comissão de Energia Atômica?

123
00:09:12,988 --> 00:09:16,990
Sim, mas na verdade,
conheci Robert enquanto

124
00:09:16,991 --> 00:09:20,143
era membro do conselho
do Instituto de Estudos Avançados

125
00:09:20,144 --> 00:09:22,119
em Princeton,
porque depois da guerra,

126
00:09:22,120 --> 00:09:25,370
ele tornou-se mundialmente renomado
como um grande homem da física

127
00:09:25,371 --> 00:09:29,337
e eu estava determinado em fazer
com que ele comandasse o Instituto.

128
00:09:38,513 --> 00:09:41,615
Dr. Oppenheimer.
Que honra.

129
00:09:41,616 --> 00:09:44,285
- Sr. Strauss.
- Se pronuncia "strós".

130
00:09:45,186 --> 00:09:46,604
Oh-ppenheimer.
Oppenheimer.

131
00:09:46,605 --> 00:09:48,887
Diga como quiser,
já sabem que sou judeu.

132
00:09:50,091 --> 00:09:52,726
Sou o presidente do templo
Emanu-El, de Manhattan.

133
00:09:52,727 --> 00:09:54,996
"Strós" é a pronúncia sulista.

134
00:09:54,997 --> 00:09:57,532
De qualquer forma,
bem-vindo ao Instituto.

135
00:09:57,533 --> 00:09:59,233
Acho que pode ser bem feliz aqui.

136
00:09:59,234 --> 00:10:01,169
Sim, você amará o trajeto.

137
00:10:01,170 --> 00:10:04,071
O cargo vem com aquela casa
para você, sua esposa

138
00:10:04,072 --> 00:10:07,107
- e seus... são dois filhos?
- Sim, dois.

139
00:10:07,108 --> 00:10:10,077
Sou um grande admirador
do seu trabalho.

140
00:10:10,078 --> 00:10:12,280
É formado em Física, Sr. Strauss?

141
00:10:12,281 --> 00:10:14,415
Desculpe.
Sala de descanso, chá das quatro.

142
00:10:14,416 --> 00:10:17,217
Não, não sou formado em Física
ou algo do tipo.

143
00:10:17,218 --> 00:10:19,086
- Sou empreendedor.
- Ah.

144
00:10:19,087 --> 00:10:21,121
- Eu entendo bem isso.
- Mesmo?

145
00:10:21,122 --> 00:10:23,068
Sim, meu pai também era.

146
00:10:24,399 --> 00:10:27,061
E esse seria seu escritório.

147
00:10:36,137 --> 00:10:38,293
Dizem que ele está lá
na maioria das tardes.

148
00:10:38,294 --> 00:10:40,340
Sabe, sempre me perguntei

149
00:10:40,341 --> 00:10:43,945
por que você não o envolveu
no Projeto Manhattan.

150
00:10:45,502 --> 00:10:47,902
A maior mente científica
de nosso tempo.

151
00:10:48,249 --> 00:10:49,649
Do tempo dele.

152
00:10:50,151 --> 00:10:52,351
Einstein publicou
a Teoria da Relatividade

153
00:10:52,352 --> 00:10:55,056
há mais de 40 anos.

154
00:10:56,074 --> 00:10:58,774
Porém, nunca abraçou
o mundo quântico que ele revelou.

155
00:10:58,775 --> 00:11:00,228
"Deus não joga dados."

156
00:11:00,700 --> 00:11:02,125
Precisamente.

157
00:11:02,126 --> 00:11:05,098
Nunca pensou em estudar física
formalmente, Sr. Strauss?

158
00:11:05,099 --> 00:11:07,967
Eu tive propostas,
mas escolhi vender calçados.

159
00:11:07,968 --> 00:11:11,093
Lewis Strauss já foi
um mero vendedor de sapatos?

160
00:11:11,773 --> 00:11:13,625
Não,
apenas um vendedor de sapato.

161
00:11:17,245 --> 00:11:20,014
- Adoraria apresentá-lo.
- Não precisa.

162
00:11:21,115 --> 00:11:22,584
Eu o conheço há anos.

163
00:11:44,343 --> 00:11:45,643
Albert.

164
00:11:50,111 --> 00:11:54,315
O que foi aquilo?
O que disse para ele?

165
00:11:56,185 --> 00:11:57,485
Ele está bem.

166
00:11:59,354 --> 00:12:02,539
Sr. Strauss, há coisas
em meu passado

167
00:12:02,540 --> 00:12:03,942
que você deveria saber.

168
00:12:03,943 --> 00:12:06,243
Como presidente
da Comissão de Energia Atômica,

169
00:12:06,244 --> 00:12:08,744
tenho acesso ao seu
arquivo de segurança. Eu o li.

170
00:12:08,745 --> 00:12:10,265
- Não está preocupado?
- Não.

171
00:12:10,266 --> 00:12:11,791
Por que estaria,
depois de tudo

172
00:12:11,792 --> 00:12:13,200
que você fez pelo seu país?

173
00:12:13,201 --> 00:12:14,951
É que os tempos mudam,
Sr. Strauss.

174
00:12:14,952 --> 00:12:16,602
Bom,
o propósito desse instituito

175
00:12:16,603 --> 00:12:19,288
é fornecer um refúgio
para mentes independentes.

176
00:12:20,174 --> 00:12:23,304
Como você.
Você é o cara para o trabalho.

177
00:12:23,605 --> 00:12:25,428
Então vou pensar.

178
00:12:25,848 --> 00:12:27,948
Vejo você na reunião
da AEC, amanhã.

179
00:12:32,627 --> 00:12:35,549
Este é um dos cargos
de maior prestígio do país.

180
00:12:35,550 --> 00:12:37,754
Sim, com um ótimo trajeto.

181
00:12:38,126 --> 00:12:39,901
Por isso que vou pensar.

182
00:12:40,461 --> 00:12:44,666
<i>Então o Dr. Oppenheimer
tocou em seu próprio passado</i>

183
00:12:44,667 --> 00:12:47,302
<i>- antes de você nomeá-lo?</i>
- Sim.

184
00:12:47,618 --> 00:12:49,070
E você não se preocupou?

185
00:12:49,071 --> 00:12:51,072
No momento,
eu estava pensando apenas

186
00:12:51,073 --> 00:12:53,000
no que ele devia
ter dito a Einstein

187
00:12:53,001 --> 00:12:54,730
para que ele
ficasse amargo comigo.

188
00:12:58,047 --> 00:12:59,359
Mas depois?

189
00:12:59,360 --> 00:13:01,622
Bom, todos nós sabemos
o que aconteceu depois.

190
00:13:01,623 --> 00:13:03,700
Doutor,
seu período na Europa

191
00:13:03,701 --> 00:13:06,101
permitiu que conhecesse
uma ampla gama de físicos

192
00:13:06,102 --> 00:13:07,995
- de outros países.
- Sim, isso mesmo.

193
00:13:07,996 --> 00:13:09,561
Algum russo?

194
00:13:11,192 --> 00:13:12,659
Nenhum que me venha à mente.

195
00:13:12,660 --> 00:13:15,596
Se você me permitir
continuar com minha declaração...

196
00:13:15,597 --> 00:13:18,566
Sr. Robb, você terá muito tempo
para seu interrogatório.

197
00:13:20,803 --> 00:13:23,770
Depois de Göttingen,
me mudei para Leiden, na Holanda,

198
00:13:23,771 --> 00:13:26,448
onde conheci Isidor Rabi.

199
00:13:27,168 --> 00:13:28,661
Com licença.

200
00:13:33,281 --> 00:13:35,617
Um ianque dando palestra
sobre a nova física?

201
00:13:35,618 --> 00:13:38,820
Preciso ouvir isso.
E olha que sou americano.

202
00:13:38,821 --> 00:13:40,321
Que surpresa.

203
00:13:41,406 --> 00:13:43,725
Se precisar de ajuda
com o inglês, fale.

204
00:13:57,705 --> 00:13:59,674
Espere aí,
o que ele está dizendo?

205
00:14:10,201 --> 00:14:11,501
Não, obrigado.

206
00:14:11,502 --> 00:14:13,254
Zurique é longe.

207
00:14:13,255 --> 00:14:14,956
Se você emagrecer mais,

208
00:14:14,957 --> 00:14:16,791
vai sumir entre as almofadas.

209
00:14:16,792 --> 00:14:19,260
- Eu sou Rabi.
- Oppenheimer.

210
00:14:19,261 --> 00:14:21,264
Vi sua palestra sobre moléculas.

211
00:14:21,265 --> 00:14:22,565
Entendi uma parte.

212
00:14:23,153 --> 00:14:25,753
Somos judeus de Nova York.
Como sabe falar holandês?

213
00:14:25,754 --> 00:14:27,402
Achei que era melhor aprender

214
00:14:27,403 --> 00:14:29,153
quando cheguei aqui,
neste semestre.

215
00:14:29,154 --> 00:14:31,454
Aprendeu holandês em 6 semanas
para palestrar

216
00:14:31,455 --> 00:14:33,817
- sobre mecânica quântica?
- Quis me desafiar.

217
00:14:33,818 --> 00:14:35,943
A física quântica
não foi o suficiente?

218
00:14:35,944 --> 00:14:37,711
<i>- Schvitzer.
- Schvitzer?</i>

219
00:14:37,712 --> 00:14:39,260
Exibidinho.

220
00:14:39,261 --> 00:14:41,911
Holandês em seis semanas,
mas nunca aprendeu ídiche?

221
00:14:41,912 --> 00:14:43,800
Não falam muito
lá para meus lados.

222
00:14:43,801 --> 00:14:45,101
Vá se ferrar.

223
00:14:46,036 --> 00:14:47,437
Com saudade de casa?

224
00:14:47,438 --> 00:14:48,738
Ah, você sabe.

225
00:14:49,491 --> 00:14:51,291
Já teve a sensação
de que nosso tipo

226
00:14:51,292 --> 00:14:52,693
não é muito bem-vindo aqui?

227
00:14:52,994 --> 00:14:55,362
- Físicos?
- Engraçadinho.

228
00:14:55,363 --> 00:14:57,464
Não no departamento.

229
00:14:57,465 --> 00:14:58,766
Também são todos judeus.

230
00:15:01,127 --> 00:15:02,477
Coma.

231
00:15:04,572 --> 00:15:06,708
Tem um alemão
que você precisa conhecer.

232
00:15:07,742 --> 00:15:09,723
- Heisenberg.
- Esse mesmo.

233
00:15:19,454 --> 00:15:21,154
Apesar de poder
ser induzido que,

234
00:15:21,155 --> 00:15:23,490
por trás do mundo quântico,

235
00:15:23,491 --> 00:15:27,394
ainda há um mundo real
em que a causalidade é importante,

236
00:15:27,395 --> 00:15:29,597
e essas especulações nos parecem,

237
00:15:29,598 --> 00:15:31,649
para ser bem explícito,
infrutíferas.

238
00:15:31,964 --> 00:15:33,836
Obrigado.
Tenham um ótimo dia.

239
00:15:39,041 --> 00:15:40,742
- Maravilhoso.
- Obrigado.

240
00:15:40,743 --> 00:15:42,043
Dr. Oppenheimer.

241
00:15:42,044 --> 00:15:43,879
Oppenheimer, sim.

242
00:15:43,880 --> 00:15:45,831
Gostei de seu artigo
sobre moléculas.

243
00:15:45,832 --> 00:15:47,532
Talvez porque você
que o inspirou.

244
00:15:47,533 --> 00:15:49,098
Se eu inspirar algo mais,
avise.

245
00:15:49,099 --> 00:15:51,919
- Podemos publicar juntos.
- Preciso voltar aos EUA.

246
00:15:51,920 --> 00:15:53,687
Por quê? Não há ninguém lá

247
00:15:53,688 --> 00:15:55,923
levando a mecânica quântica
a sério.

248
00:15:55,924 --> 00:15:57,557
É exatamente por isso.

249
00:15:57,558 --> 00:16:00,027
Ele anseia pelos cânions
de Manhattan.

250
00:16:00,028 --> 00:16:02,328
Cânions do Novo México.

251
00:16:02,329 --> 00:16:04,479
- Você é do Novo México?
- Não. Nova York.

252
00:16:04,480 --> 00:16:07,553
Mas meu irmão e eu temos um rancho
nos arredores de Santa Fé.

253
00:16:07,854 --> 00:16:09,854
É desse EUA
que sinto saudades agora.

254
00:16:09,855 --> 00:16:12,493
Então é melhor voltarem para casa,
caubóis.

255
00:16:12,813 --> 00:16:14,125
Isso é com ele.

256
00:16:14,126 --> 00:16:17,512
Cavalo não é comigo.
Não mesmo.

257
00:16:18,280 --> 00:16:19,780
Prazer em conhecê-lo.

258
00:16:21,415 --> 00:16:23,551
Voltou a encontrar Heisenberg?

259
00:16:23,552 --> 00:16:26,487
Não pessoalmente, mas...

260
00:16:27,672 --> 00:16:29,925
pode-se dizer
que nossos caminhos se cruzaram.

261
00:16:31,392 --> 00:16:34,142
Ao voltar para os EUA,
aceitei cargos

262
00:16:34,143 --> 00:16:36,364
tanto na Caltech
quanto em Berkeley.

263
00:16:40,068 --> 00:16:41,702
<i>Entendi, está tudo bem.</i>

264
00:16:56,725 --> 00:16:58,936
LABORATÓRIO DE RADIAÇÃO

265
00:17:00,421 --> 00:17:02,456
Dr. Lawrence, eu suponho.

266
00:17:04,341 --> 00:17:06,461
- Você deve ser Oppenheimer.
- Sim.

267
00:17:06,462 --> 00:17:09,163
Soube que deseja fundar
um curso de teoria quântica.

268
00:17:09,164 --> 00:17:10,731
E vou fundar. Aqui ao lado.

269
00:17:10,732 --> 00:17:12,482
- Colocaram você lá?
- Eu que pedi.

270
00:17:12,483 --> 00:17:15,033
Queria estar perto
de vocês, experimentalistas.

271
00:17:15,034 --> 00:17:17,134
A teoria só funciona
até certo ponto.

272
00:17:17,135 --> 00:17:19,835
Estamos construindo uma máquina
para acelerar elétrons.

273
00:17:19,836 --> 00:17:21,844
- Magnífico.
- Gostaria de ajudar?

274
00:17:21,845 --> 00:17:24,645
A construí-la?
Ah, não. Não, não.

275
00:17:24,646 --> 00:17:27,653
Mas estou trabalhando em teorias
que gostaria de testar nela.

276
00:17:27,654 --> 00:17:30,634
- Quando começa a lecionar?
- A primeira aula é em uma hora.

277
00:17:30,635 --> 00:17:32,420
- Seminário?
- Um pupilo.

278
00:17:32,938 --> 00:17:35,722
Um estudante? É isso?

279
00:17:35,723 --> 00:17:38,459
Estou lecionando algo
que ninguém aqui sequer sonhou.

280
00:17:38,460 --> 00:17:39,760
Mas quando souberem

281
00:17:39,761 --> 00:17:42,282
- o que se pode fazer com isso...
- Não terá volta.

282
00:17:44,166 --> 00:17:46,499
Eu não devo ter visto...

283
00:17:46,500 --> 00:17:48,502
- Sr. Lomanitz?
- na...

284
00:17:49,305 --> 00:17:52,550
- Sim.
- Sim, é aqui. Por favor.

285
00:17:52,890 --> 00:17:54,190
Sente-se.

286
00:17:58,876 --> 00:18:00,890
O que você sabe
sobre mecânica quântica?

287
00:18:01,491 --> 00:18:03,306
Sei o básico.

288
00:18:03,307 --> 00:18:04,857
Então está fazendo isso errado.

289
00:18:05,753 --> 00:18:07,903
A luz
é feita de partículas ou ondas?

290
00:18:07,904 --> 00:18:09,804
A mecânica quântica diz
que é de ambas.

291
00:18:09,805 --> 00:18:11,105
Como pode ser ambas?

292
00:18:11,106 --> 00:18:12,792
- Não pode.
- Não pode.

293
00:18:12,793 --> 00:18:17,665
Mas é. É um paradoxo,
e ainda assim, funciona.

294
00:18:24,507 --> 00:18:25,807
Agora...

295
00:18:28,086 --> 00:18:29,676
Obrigado.

296
00:18:29,677 --> 00:18:32,712
Sr. Lomanitz.
Você vai ficar bem.

297
00:18:32,713 --> 00:18:34,082
Sr. Snyder.

298
00:18:34,083 --> 00:18:35,682
Agora,
consideremos uma estrela.

299
00:18:35,683 --> 00:18:39,253
Uma estrela. Uma vasta fornalha,
queimando no espaço sideral,

300
00:18:39,254 --> 00:18:42,689
com fogo sendo cuspido
contra sua própria gravidade.

301
00:18:42,690 --> 00:18:44,026
Equilibrada.

302
00:18:44,875 --> 00:18:46,873
Mas se essa fornalha arrefecer...

303
00:18:47,829 --> 00:18:50,455
e a gravidade começar a vencer,
ela contrai.

304
00:18:50,456 --> 00:18:51,756
A densidade aumenta.

305
00:18:51,757 --> 00:18:53,100
Correto.

306
00:18:53,101 --> 00:18:55,803
- Aumentando a gravidade.
- Aumentando a densidade.

307
00:18:55,804 --> 00:18:57,972
- E?
- É um ciclo vicioso, até...

308
00:18:57,973 --> 00:18:59,607
Qual o limite aqui?

309
00:19:00,775 --> 00:19:02,975
Não sei. Veja até onde
a matemática nos leva.

310
00:19:02,976 --> 00:19:05,326
Garanto que é um lugar
que ninguém esteve antes.

311
00:19:05,327 --> 00:19:06,627
Eu?

312
00:19:06,928 --> 00:19:09,278
É, você. Sua matemática
é melhor do que a minha.

313
00:19:10,685 --> 00:19:12,820
<i>O dossiê do Dr. Oppenheimer</i>

314
00:19:12,821 --> 00:19:15,223
<i>possuía detalhes
das atividades dele em Berkeley.</i>

315
00:19:15,224 --> 00:19:17,031
Por que teriam feito um dossiê

316
00:19:17,032 --> 00:19:19,450
sobre Dr. Oppenheimer
antes da guerra?

317
00:19:19,800 --> 00:19:22,229
Isso você precisaria
perguntar ao Sr. Hoover.

318
00:19:22,230 --> 00:19:24,381
Estou perguntando a você,
Almirante Strauss.

319
00:19:25,039 --> 00:19:29,581
Suponho
que era devido ao vínculo

320
00:19:30,317 --> 00:19:32,758
com suas atividades políticas
de esquerda.

321
00:19:32,759 --> 00:19:34,609
SÁBADO COMÍCIO
REPUBLICANOS NA ESPANHA

322
00:19:34,610 --> 00:19:37,308
Não deveria permitir política
na sala de aula, Oppie.

323
00:19:37,617 --> 00:19:38,917
Eu escrevi isso.

324
00:19:38,918 --> 00:19:42,149
Lawrence,
você abraça a revolução na física.

325
00:19:42,150 --> 00:19:44,000
Não consegue vê-la
nos outros lugares?

326
00:19:44,001 --> 00:19:46,101
Picasso, Stravinsky,
Freud, Marx.

327
00:19:46,102 --> 00:19:47,704
Aqui é os Estados Unidos, Oppie.

328
00:19:47,705 --> 00:19:49,124
Tivemos nossa revolução.

329
00:19:50,158 --> 00:19:52,994
É sério,
deixe isso fora do laboratório.

330
00:19:52,995 --> 00:19:55,830
Então, fora do laboratório,
minha senhoria

331
00:19:55,831 --> 00:19:58,632
terá um grupo de discussão
hoje à noite. Interessado?

332
00:19:58,633 --> 00:20:00,767
Já testei a cena política
de Berkeley.

333
00:20:00,768 --> 00:20:02,804
Só tem pós-graduados
de filosofia

334
00:20:02,805 --> 00:20:05,324
e comunistas
falando sobre integração.

335
00:20:05,325 --> 00:20:07,025
Você não se importa
com integração.

336
00:20:07,026 --> 00:20:08,976
Eu quero votar,
não falar sobre ela.

337
00:20:08,977 --> 00:20:11,150
Especialmente numa sexta.
Vem, vamos comer.

338
00:20:11,151 --> 00:20:13,148
Vou encontrar meu irmão lá.

339
00:20:13,449 --> 00:20:15,059
<i>E como essas atividades</i>

340
00:20:15,060 --> 00:20:17,252
<i>entraram na mira
do FBI?</i>

341
00:20:17,253 --> 00:20:19,250
Se me lembro bem,

342
00:20:19,251 --> 00:20:21,255
o FBI estava pegando
placas de carros

343
00:20:21,256 --> 00:20:23,784
nos arredores
de aglomerações de comunistas

344
00:20:23,785 --> 00:20:25,626
<i>e tocaram no nome dele.</i>

345
00:20:33,201 --> 00:20:34,768
- Te peguei!
- Jesus amado!

346
00:20:34,769 --> 00:20:37,072
- Desculpe. Oi, mano.
- Frank.

347
00:20:38,073 --> 00:20:41,309
- Você se lembra de Jackie.
- Boa noite.

348
00:20:41,310 --> 00:20:42,911
Vamos. Venha.

349
00:20:43,345 --> 00:20:45,914
Ali, ali.

350
00:20:46,848 --> 00:20:50,269
Robert,
quero que conheça Chevalier.

351
00:20:50,270 --> 00:20:53,587
Dr. Haakon Chevalier,
Dr. Robert Oppenheimer.

352
00:20:53,588 --> 00:20:56,124
- É um prazer.
- Prazer. Meu irmão, Frank.

353
00:20:56,125 --> 00:20:57,598
- E essa é...
- Olá.

354
00:20:57,599 --> 00:20:59,501
- Ainda Jackie.
- Olá, Ainda Jackie.

355
00:20:59,502 --> 00:21:01,362
Chevalier, você é de Letras?

356
00:21:01,363 --> 00:21:02,998
E sua reputação te precede.

357
00:21:02,999 --> 00:21:04,666
- O que você ouviu?
- Com licença.

358
00:21:04,667 --> 00:21:07,017
Que ensina uma abordagem
nova e radical à Física

359
00:21:07,018 --> 00:21:09,318
que não tenho chance de entender,
mas não sabia

360
00:21:09,319 --> 00:21:11,069
- que era do Partido.
- Não sou.

361
00:21:11,070 --> 00:21:13,883
- Ainda não.
- Frank e eu queríamos nos filiar.

362
00:21:13,884 --> 00:21:16,712
- Apoio diversas causas.
- A Guerra Civil Espanhola?

363
00:21:16,713 --> 00:21:18,626
Uma república democrática
sendo deposta

364
00:21:18,627 --> 00:21:20,677
por bandidos fascistas,
quem não apoiaria?

365
00:21:20,678 --> 00:21:22,730
Nosso governo.
Eles acham que o socialismo

366
00:21:22,731 --> 00:21:25,431
- é maior ameaça que o fascismo.
- Não por muito tempo.

367
00:21:25,432 --> 00:21:27,002
Olhe os nazistas com os judeus.

368
00:21:27,003 --> 00:21:29,725
Eu envio dinheiro a colegas
na Alemanha para emigrarem.

369
00:21:29,726 --> 00:21:31,336
Preciso fazer algo.

370
00:21:32,215 --> 00:21:34,906
Meu próprio trabalho
é tão abstrato.

371
00:21:34,907 --> 00:21:36,253
Está trabalhando no quê?

372
00:21:36,254 --> 00:21:38,629
O que acontece com as estrelas
quando morrem.

373
00:21:38,630 --> 00:21:39,971
Estrelas morrem?

374
00:21:41,002 --> 00:21:42,336
Se morrerem,

375
00:21:42,337 --> 00:21:44,623
elas esfriam
e depois desabam.

376
00:21:44,624 --> 00:21:46,941
Na verdade, quanto maior a estrela,

377
00:21:46,942 --> 00:21:49,676
<i>mais violento é o seu fim.</i>

378
00:21:49,677 --> 00:21:53,282
A gravidade fica tão concentrada
que engole tudo.

379
00:21:53,583 --> 00:21:55,217
Tudo, até mesmo a luz.

380
00:21:55,218 --> 00:21:58,253
- Isso pode mesmo acontecer?
- Segundo a matemática, sim.

381
00:21:58,254 --> 00:22:00,354
Se formos publicados,
talvez um dia

382
00:22:00,355 --> 00:22:01,655
um astrônomo ache uma.

383
00:22:01,656 --> 00:22:03,429
Mas, por enquanto,
só tenho teorias,

384
00:22:03,430 --> 00:22:05,518
que não podem impactar
a vida das pessoas.

385
00:22:05,519 --> 00:22:07,569
Se você enviar dinheiro
para a Espanha,

386
00:22:07,570 --> 00:22:09,278
que seja pelo
Partido Comunista.

387
00:22:09,279 --> 00:22:12,230
- Vão levá-lo à linha de frente.
- Mary me enviou com isso.

388
00:22:13,401 --> 00:22:16,204
- Eu sou Jean.
- Robert.

389
00:22:16,205 --> 00:22:18,155
Haakon Chevalier.
A reunião do sindicato

390
00:22:18,156 --> 00:22:20,741
- na casa de Serber, mês passado?
- Sim, isso.

391
00:22:21,438 --> 00:22:22,738
Obrigada.

392
00:22:22,739 --> 00:22:24,595
O Robert aqui
diz que não é comunista.

393
00:22:24,596 --> 00:22:26,896
Então ele não sabe o suficiente
sobre isso.

394
00:22:26,897 --> 00:22:29,748
Eu li "O Capital",
os três volumes.

395
00:22:29,749 --> 00:22:31,299
- Isso conta?
- Faria de você

396
00:22:31,300 --> 00:22:33,150
um leitor mais ávido
do que a maioria.

397
00:22:33,151 --> 00:22:35,314
É túrgido.
Há um pouco de reflexão, como

398
00:22:35,315 --> 00:22:36,755
"Propriedade é Roubo."

399
00:22:36,756 --> 00:22:38,547
- "Posse."
- "Posse?"

400
00:22:38,548 --> 00:22:40,161
"Posse", não "propriedade".

401
00:22:40,162 --> 00:22:42,197
Desculpe, eu li o original,
em alemão.

402
00:22:45,766 --> 00:22:47,135
Não é sobre o livro.

403
00:22:47,136 --> 00:22:50,136
É sobre as ideias.
E você não parece comprometido.

404
00:22:50,137 --> 00:22:52,248
Bom, estou comprometido
a pensar livremente

405
00:22:52,249 --> 00:22:54,209
em como melhorar
nosso mundo.

406
00:22:54,598 --> 00:22:56,714
Por que se limitar
a um único dogma?

407
00:22:56,715 --> 00:22:59,447
Você é um físico,
você que escolhe as regras?

408
00:22:59,448 --> 00:23:01,049
Ou usa a disciplina

409
00:23:01,050 --> 00:23:03,823
para focar suas energias
visando o progresso?

410
00:23:03,824 --> 00:23:05,654
Gosto de ter
um espacinho de manobra.

411
00:23:06,754 --> 00:23:08,807
Você sempre segue as regras?

412
00:23:10,325 --> 00:23:12,275
Também gosto
de um espacinho de manobra.

413
00:23:22,981 --> 00:23:24,333
O quê?

414
00:23:24,724 --> 00:23:26,074
Espere, espere.

415
00:23:29,878 --> 00:23:31,512
Inesperado.

416
00:23:31,513 --> 00:23:34,120
- O quê?
- Para um físico.

417
00:23:34,121 --> 00:23:36,386
Você tem uma prateleira
só com Freud?

418
00:23:36,387 --> 00:23:39,153
Na verdade,
minha formação é mais...

419
00:23:39,154 --> 00:23:40,654
Jungiana?

420
00:23:42,075 --> 00:23:43,671
Você entende de análise?

421
00:23:43,672 --> 00:23:45,826
Quando eu fazia pós-graduação
em Cambridge,

422
00:23:45,827 --> 00:23:47,296
tive alguns probleminhas.

423
00:23:48,129 --> 00:23:50,865
- Tá, vou cair nessa.
- Tentei envenenar meu professor.

424
00:23:50,866 --> 00:23:53,401
- Você o odiava?
- Eu gostava bastante dele.

425
00:23:53,702 --> 00:23:55,237
Você só precisava transar.

426
00:23:55,238 --> 00:23:57,038
Fiz dois anos de análise,

427
00:23:57,039 --> 00:23:59,389
e acho que ele nunca falou
de forma tão sucinta.

428
00:23:59,390 --> 00:24:00,960
Você convenceu a todo mundo

429
00:24:00,961 --> 00:24:03,077
que é mais complicado
do que de fato é.

430
00:24:03,078 --> 00:24:05,080
Somos todos almas simples,
acho.

431
00:24:05,081 --> 00:24:06,381
Eu não sou.

432
00:24:08,885 --> 00:24:10,217
O que é isso?

433
00:24:10,218 --> 00:24:13,153
- Sânscrito.
- Consegue ler isso?

434
00:24:13,154 --> 00:24:14,956
Estou aprendendo.

435
00:24:19,916 --> 00:24:21,300
Leia isso.

436
00:24:22,397 --> 00:24:24,064
Bem, nessa parte,

437
00:24:24,065 --> 00:24:26,268
"Vishnu revela
seus vários braços..."

438
00:24:26,269 --> 00:24:27,600
Não.

439
00:24:28,370 --> 00:24:30,238
Leia as palavras.

440
00:24:33,608 --> 00:24:36,777
"Agora eu me tornei a morte,

441
00:24:42,217 --> 00:24:43,952
o destruidor de mundos."

442
00:25:14,456 --> 00:25:15,756
Aqui está bom.

443
00:25:22,357 --> 00:25:23,991
Vai clarear
antes do amanhecer.

444
00:25:23,992 --> 00:25:27,362
O ar esfria à noite,
e logo antes do amanhecer, clareia.

445
00:25:30,031 --> 00:25:31,966
Venha.

446
00:25:39,032 --> 00:25:41,476
Então, vou me casar.

447
00:25:41,477 --> 00:25:43,587
- Frank. Parabéns!
- Obrigado.

448
00:25:43,588 --> 00:25:44,946
- Obrigado.
- Com Jackie?

449
00:25:45,247 --> 00:25:46,950
Sim, com Jackie.

450
00:25:47,450 --> 00:25:48,750
A garçonete.

451
00:25:48,751 --> 00:25:50,601
Oppie, você tem razão.
Está clareando.

452
00:25:50,602 --> 00:25:52,561
Vou ver se há alguma estrela.

453
00:25:52,865 --> 00:25:54,805
Todo aquele papo
sobre o homem comum,

454
00:25:54,806 --> 00:25:57,106
mas Jackie não é boa o suficiente
para você, é?

455
00:25:57,509 --> 00:26:00,267
Entramos para o Partido
e você nem esconde sua decepção.

456
00:26:00,268 --> 00:26:01,732
Por quê?
É porque supostamente

457
00:26:01,733 --> 00:26:03,983
- é a sua praia?
- Não entrei para o Partido.

458
00:26:03,984 --> 00:26:06,634
E não acho que ela deveria ter
te convencido a entrar.

459
00:26:06,635 --> 00:26:08,385
Metade do corpo docente
é comunista.

460
00:26:08,386 --> 00:26:09,686
Não chega a metade.

461
00:26:10,405 --> 00:26:13,173
Eu sou seu irmão, Frank,
e quero que tenha cuidado.

462
00:26:13,174 --> 00:26:14,876
E eu quero apertar seu pescoço.

463
00:26:17,278 --> 00:26:20,181
Não vou viver minha vida
com medo de errar.

464
00:26:22,050 --> 00:26:25,287
Se você é feliz,
eu sou feliz.

465
00:26:25,288 --> 00:26:27,238
Então estou feliz
que você esteja feliz

466
00:26:27,239 --> 00:26:28,539
porque estou feliz.

467
00:26:32,975 --> 00:26:35,375
Sinto que consigo ver
uma dessas estrelas escuras

468
00:26:35,376 --> 00:26:36,774
em que está trabalhando.

469
00:26:36,775 --> 00:26:39,283
Não dá para ver.
Essa é a questão.

470
00:26:39,601 --> 00:26:41,452
A gravidade delas
engole a luz.

471
00:26:42,570 --> 00:26:45,311
É tipo um buraco no espaço.

472
00:26:45,673 --> 00:26:47,008
Frank está bem?

473
00:26:47,009 --> 00:26:49,744
Sim. É que ele tem
um irmão de merda.

474
00:26:50,728 --> 00:26:52,247
É especial, aqui.

475
00:26:54,616 --> 00:26:56,283
Quando eu era criança,

476
00:26:57,118 --> 00:26:59,299
achava que,
se pudesse encontrar uma forma

477
00:27:00,188 --> 00:27:04,195
de combinar Física
e o Novo México,

478
00:27:04,592 --> 00:27:06,284
minha vida seria perfeita.

479
00:27:08,164 --> 00:27:10,605
- É um pouco remoto para isso.
- Sim.

480
00:27:10,606 --> 00:27:12,333
Vamos dormir um pouco.

481
00:27:13,301 --> 00:27:15,001
Aquela montanha
que vimos hoje

482
00:27:15,303 --> 00:27:17,458
é um dos meus lugares preferidos
no mundo.

483
00:27:18,072 --> 00:27:19,573
E amanhã vamos escalá-la.

484
00:27:19,574 --> 00:27:21,009
Qual é o nome dela?

485
00:27:22,043 --> 00:27:23,529
Los Alamos.

486
00:27:27,215 --> 00:27:29,217
Não esperava ver você hoje.

487
00:27:30,385 --> 00:27:32,220
Preciso marcar hora?

488
00:27:34,155 --> 00:27:36,191
Ei! Ei, volte aqui!

489
00:27:36,192 --> 00:27:37,492
Alvarez?

490
00:27:43,231 --> 00:27:46,099
Oppie! Oppie!

491
00:27:46,100 --> 00:27:48,905
- O quê? O que foi?
- Conseguiram!

492
00:27:48,906 --> 00:27:51,929
Hahn e Strassmann, na Alemanha,
dividiram o núcleo do urânio.

493
00:27:51,930 --> 00:27:54,694
CIÊNCIA - EXPLOSÕES ATÔMICAS
CRIAM 200 MILHÕES DE VOLTS.

494
00:27:54,695 --> 00:27:55,995
Como?

495
00:27:56,711 --> 00:27:58,613
Bombardeando-o com nêutrons.

496
00:27:58,614 --> 00:28:00,070
É uma fissão nuclear.

497
00:28:00,071 --> 00:28:01,779
Conseguiram,
dividiram o átomo.

498
00:28:01,780 --> 00:28:03,135
Não é possível.

499
00:28:09,190 --> 00:28:10,992
Vou tentar reproduzi-lo.

500
00:28:17,632 --> 00:28:19,567
Viu? Não dá.

501
00:28:20,668 --> 00:28:24,104
Muito elegante.
Bem claro.

502
00:28:24,105 --> 00:28:26,408
- Só há um problema.
- Onde?

503
00:28:26,774 --> 00:28:28,576
Na sala ao lado.

504
00:28:28,577 --> 00:28:30,195
Alvarez conseguiu.

505
00:28:31,148 --> 00:28:32,577
Mas olhe...

506
00:28:32,897 --> 00:28:36,116
são pulsações da fissão,
muito fortes.

507
00:28:36,117 --> 00:28:39,387
Já vi 30 delas
nos últimos 10 minutos.

508
00:28:39,688 --> 00:28:42,257
A teoria tem um limite.

509
00:28:43,758 --> 00:28:45,792
Durante o processo,

510
00:28:45,793 --> 00:28:47,561
nêutrons extras vaporizam,

511
00:28:47,562 --> 00:28:50,764
o que pode ser usado para dividir
outros átomos de urânio.

512
00:28:50,765 --> 00:28:52,166
Reação em cadeia.

513
00:28:52,167 --> 00:28:54,301
Você está pensando
o que eu estou pensando.

514
00:28:54,302 --> 00:28:56,670
Eu, você e todo físico
ao redor do mundo

515
00:28:56,671 --> 00:28:58,172
que assistiu às notícias.

516
00:28:58,874 --> 00:29:01,144
Eu... o quê?
O que estamos todos pensando?

517
00:29:02,012 --> 00:29:04,479
Uma bomba, Alvarez.

518
00:29:05,647 --> 00:29:07,348
Uma bomba.

519
00:29:08,217 --> 00:29:10,585
Eu te disse, Robert,
chega de flores, porra.

520
00:29:12,500 --> 00:29:14,241
Não entendo
o que você quer de mim.

521
00:29:14,242 --> 00:29:15,573
Não quero nada de você.

522
00:29:17,251 --> 00:29:18,807
Você diz isso e depois me liga.

523
00:29:18,808 --> 00:29:21,195
Então não atenda.

524
00:29:21,539 --> 00:29:23,231
Eu sempre atenderei.

525
00:29:28,287 --> 00:29:29,600
Tá bem.

526
00:29:29,901 --> 00:29:32,173
Mas chega de flores.

527
00:29:33,207 --> 00:29:34,576
Você não vem?

528
00:29:36,199 --> 00:29:38,699
Precisa saber quando
está derrotado, Robert.

529
00:29:40,849 --> 00:29:42,616
Não é simples assim, Hoke.

530
00:29:42,617 --> 00:29:44,819
Chevalier, é bom ver você.
É...

531
00:29:44,820 --> 00:29:46,154
Barbara, é bom vê-la,

532
00:29:46,155 --> 00:29:48,590
e também o ilustre
Dr. Oppenheimer.

533
00:29:48,591 --> 00:29:49,895
Eu sou Eltenton.

534
00:29:49,896 --> 00:29:51,268
- É um prazer.
- Por favor.

535
00:29:51,269 --> 00:29:52,626
Pode dizer uma palavrinha

536
00:29:52,627 --> 00:29:55,262
sobre trabalho sindicalizado
nos <i>campi</i>, sim?

537
00:29:55,263 --> 00:29:56,798
Passando!
Passando!

538
00:29:56,799 --> 00:29:58,509
- F.A.E.C.T.!
- Trabalho na Shell.

539
00:29:58,510 --> 00:30:00,764
Contratamos químicos,
contratamos engenheiros,

540
00:30:00,765 --> 00:30:02,850
então, por que não cientistas
na academia?

541
00:30:02,851 --> 00:30:05,430
Oppie! Oppie! Oppie!

542
00:30:12,980 --> 00:30:16,441
ARQUITETOS, ENGENHEIROS,
QUÍMICOS E TÉCNICOS

543
00:30:16,650 --> 00:30:18,801
Professores de escola
são sindicalizados,

544
00:30:18,802 --> 00:30:20,362
por que não os de faculdade?

545
00:30:20,363 --> 00:30:22,158
Você não tem mais
o que fazer?

546
00:30:22,159 --> 00:30:24,265
Os acadêmicos
também têm direitos.

547
00:30:24,266 --> 00:30:26,285
Não é isso.
Tem um pessoal chegando.

548
00:30:27,615 --> 00:30:29,329
- Eu vou ficar.
- Não desta vez.

549
00:30:35,854 --> 00:30:37,670
Richard. Dr. Bush.

550
00:30:37,671 --> 00:30:39,423
O que vieram fazer no norte?

551
00:30:48,794 --> 00:30:52,002
Richard, diga à Ruth que estarei
em Pasadena na quinta-feira.

552
00:31:01,730 --> 00:31:03,915
Publicaram seu artigo
sobre buracos negros!

553
00:31:05,657 --> 00:31:09,369
Onde está o Hartland?
Chame o Hartland.

554
00:31:09,536 --> 00:31:12,998
1º de setembro de 1939,
o mundo vai se lembrar desse dia.

555
00:31:14,798 --> 00:31:16,792
Hartland. Nosso artigo
foi publicado.

556
00:31:16,793 --> 00:31:18,587
Você foi ofuscado.

557
00:31:18,712 --> 00:31:20,339
HITLER INVADE A POLÔNIA

558
00:31:20,386 --> 00:31:22,299
"VITÓRIA OU MORTE" - HITLER
BOMBARDEIOS

559
00:31:22,382 --> 00:31:27,262
Durante a Batalha da Grã-Bretanha,
fui perdendo gradualmente a empatia

560
00:31:27,730 --> 00:31:30,807
pela política de neutralidade
defendida pelos comunistas.

561
00:31:30,808 --> 00:31:33,408
Depois que Hitler invadiu a Rússia
e viramos aliados,

562
00:31:34,269 --> 00:31:36,522
a empatia pelos comunistas voltou?

563
00:31:36,523 --> 00:31:37,823
Não.

564
00:31:38,650 --> 00:31:41,581
Preciso esclarecer
que minha mudança de opinião

565
00:31:41,582 --> 00:31:43,661
sobre a Rússia
não foi uma ruptura

566
00:31:43,662 --> 00:31:45,906
com quem tinha opinião diferente.

567
00:31:45,907 --> 00:31:48,491
Por um ou dois anos,
durante um casamento anterior,

568
00:31:48,492 --> 00:31:51,820
minha esposa Kitty integrou
o Partido Comunista.

569
00:31:55,707 --> 00:31:57,751
Por aqui.
É onde guardo o melhor.

570
00:31:57,752 --> 00:31:59,670
Achei que esta era
a casa dos Tolmans.

571
00:31:59,837 --> 00:32:01,797
Fico com eles
quando venho ao Caltech.

572
00:32:01,798 --> 00:32:03,507
Vocês precisam de algo?

573
00:32:03,508 --> 00:32:04,908
Não, obrigado, Ruthie.

574
00:32:05,968 --> 00:32:08,720
Então, você é bióloga.

575
00:32:09,346 --> 00:32:12,015
De alguma forma,
eu me formei dona de casa.

576
00:32:12,599 --> 00:32:16,186
Pode me explicar mecânica quântica?
Parece desafiante.

577
00:32:16,488 --> 00:32:17,788
É, sim.

578
00:32:19,189 --> 00:32:20,607
Bem, este copo,

579
00:32:21,733 --> 00:32:23,068
esta bebida,

580
00:32:23,562 --> 00:32:24,862
esta bancada,

581
00:32:26,196 --> 00:32:27,948
nossos corpos,

582
00:32:29,067 --> 00:32:30,367
tudo.

583
00:32:31,307 --> 00:32:32,924
É basicamente um espaço vazio.

584
00:32:33,495 --> 00:32:36,456
Grupos de minúsculas
ondas de energia interligadas.

585
00:32:36,457 --> 00:32:37,757
Pelo quê?

586
00:32:37,758 --> 00:32:41,245
Forças de atração fortes
o suficiente para nos convencer

587
00:32:41,650 --> 00:32:43,639
de que a matéria é sólida.

588
00:32:43,640 --> 00:32:46,600
Impedindo que o meu corpo
passe através do seu.

589
00:32:58,429 --> 00:33:00,230
Você é casada com o Dr. Harrison.

590
00:33:01,003 --> 00:33:02,303
Não muito.

591
00:33:03,784 --> 00:33:07,454
Há uma pessoa por quem eu sinto...

592
00:33:07,455 --> 00:33:09,330
Ela sente a mesma coisa?

593
00:33:09,331 --> 00:33:12,751
Às vezes. Não o bastante.

594
00:33:14,169 --> 00:33:16,669
Sabe, eu vou para o Novo México.

595
00:33:17,131 --> 00:33:19,081
Para o meu rancho, com amigos.

596
00:33:19,082 --> 00:33:20,442
Venha também.

597
00:33:21,134 --> 00:33:23,096
Com o seu marido, é claro.

598
00:33:23,097 --> 00:33:24,429
É claro.

599
00:33:24,430 --> 00:33:26,980
Porque sabe que não vai
fazer diferença.

600
00:33:31,353 --> 00:33:32,908
Por que se casou com ele?

601
00:33:32,909 --> 00:33:36,259
Eu estava perdida
e ele era gentil.

602
00:33:38,745 --> 00:33:40,045
Perdida?

603
00:33:40,046 --> 00:33:42,406
Meu marido anterior
havia morrido,

604
00:33:42,956 --> 00:33:45,356
e aos 28, eu não estava
preparada para ser viúva.

605
00:33:45,357 --> 00:33:47,019
Quem foi seu primeiro marido?

606
00:33:47,020 --> 00:33:50,163
Ninguém. Mas meu segundo marido
era Joe Dallet.

607
00:33:50,164 --> 00:33:52,630
Ele era de família rica,
como eu,

608
00:33:52,631 --> 00:33:55,953
mas ele era sindicalista
em Youngstown, Ohio.

609
00:33:56,254 --> 00:33:57,554
Me apaixonei perdidamente.

610
00:33:57,855 --> 00:33:59,155
Perdidamente?

611
00:33:59,156 --> 00:34:01,606
Tanto que vivi 4 anos
à base de feijão e panqueca,

612
00:34:01,607 --> 00:34:04,320
entregando o <i>Daily Worker</i>
em portões da fábrica.

613
00:34:05,020 --> 00:34:07,422
Aos 36, eu disse ao Joe
que não dava mais.

614
00:34:07,423 --> 00:34:09,892
Saí do Partido, e um ano depois
eu quis voltar.

615
00:34:09,893 --> 00:34:12,603
Para ele,
não para o <i>Daily Worker...</i>

616
00:34:12,604 --> 00:34:14,974
Ele disse: "Nos vemos
a caminho da Espanha."

617
00:34:14,975 --> 00:34:16,325
Foi lutar pelos legalistas?

618
00:34:16,326 --> 00:34:18,576
Depois, ele foi para as brigadas
e eu esperei.

619
00:34:18,577 --> 00:34:19,877
E...

620
00:34:21,070 --> 00:34:24,256
ele morreu assim que pôs
a cabeça fora da trincheira.

621
00:34:25,740 --> 00:34:28,035
Joe morreu pela ideologia.
Por nada.

622
00:34:28,036 --> 00:34:29,886
A república espanhola
não é um "nada".

623
00:34:29,887 --> 00:34:31,637
Meu marido sacrificou
o nosso futuro

624
00:34:31,638 --> 00:34:34,984
para impedir que uma bala fascista
fosse parar num monte de lama.

625
00:34:35,993 --> 00:34:37,987
Essa é a definição de nada.

626
00:34:38,379 --> 00:34:40,421
- Um pouco reducionista.
- Pragmático.

627
00:34:41,958 --> 00:34:43,533
Agora eu estou aqui.

628
00:34:46,135 --> 00:34:47,795
Onde quer que aqui seja.

629
00:34:55,062 --> 00:34:57,982
Não queria que soubesse
por outra pessoa.

630
00:35:00,317 --> 00:35:02,394
Pelo menos
não me trouxe flores.

631
00:35:09,827 --> 00:35:12,478
Nós sabemos que não sou
o que você quer.

632
00:35:13,505 --> 00:35:15,950
É, mas é uma porta
que se fecha.

633
00:35:15,951 --> 00:35:17,251
Não.

634
00:35:19,294 --> 00:35:21,427
Se depender de mim, não.

635
00:35:22,798 --> 00:35:25,248
Você a engravidou,
agiu rápido.

636
00:35:25,249 --> 00:35:27,219
Quando o cara é bom
é difícil segurar.

637
00:35:27,928 --> 00:35:29,363
Eu me referi a ela.

638
00:35:30,007 --> 00:35:31,307
Ela sabia o que queria.

639
00:35:31,765 --> 00:35:33,100
E o marido?

640
00:35:33,101 --> 00:35:36,562
Nós conversamos.
Eles vão se divorciar

641
00:35:36,563 --> 00:35:40,356
para podermos nos casar
antes que comece a aparecer.

642
00:35:40,357 --> 00:35:41,775
Que civilizado.

643
00:35:43,645 --> 00:35:44,945
Seu idiota.

644
00:35:44,946 --> 00:35:47,005
Essa é a sua comunidade.

645
00:35:47,316 --> 00:35:50,053
Acha que as regras não se aplicam
ao menino de ouro?

646
00:35:50,868 --> 00:35:52,987
A genialidade
compensa muita coisa.

647
00:35:53,403 --> 00:35:55,489
Não exclua as únicas
pessoas no mundo

648
00:35:55,490 --> 00:35:57,193
que entendem o que você faz.

649
00:35:58,500 --> 00:36:00,234
Um dia você pode precisar delas.

650
00:36:00,235 --> 00:36:02,702
<i>F.A.E.C.T.!</i>

651
00:36:02,703 --> 00:36:07,092
A Federação de Arquitetos,
Engenheiros, Químicos e Técnicos.

652
00:36:11,046 --> 00:36:12,896
SINDICALIZE
O LABORATÓRIO DE RADIAÇÃO!

653
00:36:12,897 --> 00:36:14,197
DA F.A.E.C.T.

654
00:36:14,198 --> 00:36:16,018
Lomanitz,
quanto você ganha por mês?

655
00:36:16,019 --> 00:36:17,572
Não é essa a questão, Lawrence.

656
00:36:17,573 --> 00:36:22,266
O que vocês têm em comum
com agricultores e estivadores?

657
00:36:22,267 --> 00:36:23,567
Muita coisa.

658
00:36:24,877 --> 00:36:27,032
Saiam todos. Agora!

659
00:36:31,541 --> 00:36:32,841
Você, não.

660
00:36:38,775 --> 00:36:40,107
O que está fazendo?

661
00:36:40,408 --> 00:36:41,944
É um sindicato.

662
00:36:41,945 --> 00:36:43,785
Cheio de comunistas.

663
00:36:43,786 --> 00:36:45,610
E daí? Eu não me filiei.

664
00:36:45,611 --> 00:36:47,378
Não me deixam levá-lo
para o projeto

665
00:36:47,379 --> 00:36:48,801
por causa dessa merda.

666
00:36:48,802 --> 00:36:51,116
Não posso nem dizer
qual é o projeto.

667
00:36:51,672 --> 00:36:53,314
Eu sei qual é o projeto.

668
00:36:53,315 --> 00:36:54,808
- Ah, sabe?
- Todos sabem

669
00:36:54,809 --> 00:36:57,059
da carta de Einstein e Szilard
para Roosevelt

670
00:36:57,060 --> 00:36:58,889
alertando sobre uma bomba
dos alemães

671
00:36:58,890 --> 00:37:02,011
e eu sei o que significa
os nazistas terem uma bomba.

672
00:37:02,012 --> 00:37:03,316
E eu não?

673
00:37:03,317 --> 00:37:05,555
Não é seu povo
que mandam para os campos.

674
00:37:06,345 --> 00:37:07,645
É o meu.

675
00:37:08,404 --> 00:37:10,904
Acha que eu conto a eles
sobre a sua política.

676
00:37:12,712 --> 00:37:14,906
Da próxima vez
que voltar de uma reunião,

677
00:37:14,907 --> 00:37:16,662
dê uma olhada no retrovisor.

678
00:37:17,121 --> 00:37:22,082
Escute os barulhos no seu telefone
e pare de ser tão ingênuo!

679
00:37:23,064 --> 00:37:24,918
Por que se importariam
com o que faço?

680
00:37:24,919 --> 00:37:28,974
Você não é importante só para você,
você é realmente importante.

681
00:37:29,751 --> 00:37:31,051
Certo.

682
00:37:32,177 --> 00:37:35,422
Certo. Eu entendo.

683
00:37:35,681 --> 00:37:37,349
Se puder ser
um pouco mais...

684
00:37:37,350 --> 00:37:38,840
Pragmático.

685
00:37:38,841 --> 00:37:40,820
Falarei com Lomanitz
e com os outros.

686
00:37:40,821 --> 00:37:42,304
Não se preocupe. Acabou.

687
00:37:42,605 --> 00:37:43,905
Lawrence.

688
00:37:48,753 --> 00:37:50,326
Então, bem-vindo à guerra.

689
00:37:50,738 --> 00:37:54,033
Preenchi o primeiro questionário
de segurança e fui informado

690
00:37:54,034 --> 00:37:58,245
que meu envolvimento com grupos
de esquerda não impediria

691
00:37:58,246 --> 00:38:00,652
minha participação
no programa atômico.

692
00:38:00,653 --> 00:38:03,837
<i>Por que não consideraram
suas ligações comunistas</i>

693
00:38:03,838 --> 00:38:06,252
como um risco durante a guerra?

694
00:38:06,253 --> 00:38:07,755
Senador, não posso responder

695
00:38:07,756 --> 00:38:11,511
por uma credencial dada
anos antes de eu conhecer o homem.

696
00:38:11,512 --> 00:38:12,843
Certo. E depois?

697
00:38:13,344 --> 00:38:15,781
Depois da guerra,
o Dr. Oppenheimer

698
00:38:15,782 --> 00:38:19,182
era a voz científica
mais respeitada do mundo.

699
00:38:19,183 --> 00:38:21,423
Por isso pedi
que dirigisse o Instituto,

700
00:38:21,424 --> 00:38:24,246
por isso ele era membro da AEC.

701
00:38:24,247 --> 00:38:25,547
Simples assim.

702
00:38:25,898 --> 00:38:27,399
Do que estão me acusando?

703
00:38:28,017 --> 00:38:31,637
Acho que só querem saber
o que aconteceu entre 1947 e 1954

704
00:38:31,638 --> 00:38:34,447
para mudar de opinião
sobre a credencial do Oppenheimer.

705
00:38:34,448 --> 00:38:37,570
Eu não mudei.
Eu era o presidente da AEC,

706
00:38:37,571 --> 00:38:41,015
mas não fui eu que fiz
as acusações contra o Robert.

707
00:38:41,016 --> 00:38:44,388
- Quem foi?
- Um ex-membro do Comitê Adjunto.

708
00:38:44,389 --> 00:38:47,086
Era um anticomunista ferrenho
chamado Borden.

709
00:38:47,087 --> 00:38:49,755
Ele escreveu ao FBI
exigindo providências.

710
00:38:49,756 --> 00:38:52,165
Ao FBI?
Por que não foi direto à AEC?

711
00:38:52,166 --> 00:38:54,777
Por que ser pego
com a faca na mão?

712
00:38:54,778 --> 00:38:57,178
O que Borden tinha
contra Oppenheimer?

713
00:38:57,179 --> 00:38:59,056
Isso foi na era McCarthy.

714
00:38:59,223 --> 00:39:00,956
As pessoas perdiam o emprego

715
00:39:00,957 --> 00:39:03,310
por qualquer alusão
ao comunismo. E...

716
00:39:04,103 --> 00:39:07,815
lendo a ficha do Oppenheimer,
o irmão comunista, a cunhada,

717
00:39:07,816 --> 00:39:09,984
noiva, melhor amigo, esposa.

718
00:39:09,985 --> 00:39:12,662
Isso antes mesmo
do incidente Chevalier.

719
00:39:12,663 --> 00:39:15,547
Como Borden teve acesso
à ficha de Oppenheimer?

720
00:39:16,073 --> 00:39:17,649
Alguém entregou a ele.

721
00:39:19,076 --> 00:39:21,648
Alguém
que queria silenciar o Robert.

722
00:39:21,954 --> 00:39:23,555
- Quem?
- Quem sabe?

723
00:39:23,556 --> 00:39:26,038
Robert não se preocupava
em não chatear

724
00:39:26,039 --> 00:39:27,664
os poderosos de Washington.

725
00:39:28,393 --> 00:39:31,117
Suas opiniões sobre o átomo
se confirmaram,

726
00:39:31,118 --> 00:39:33,465
e ele não tinha paciência
com meros mortais.

727
00:39:37,469 --> 00:39:40,059
Eu também senti isso na pele.

728
00:39:40,060 --> 00:39:43,058
Houve uma votação na AEC

729
00:39:43,183 --> 00:39:45,394
sobre exportar isótopos
para a Noruega,

730
00:39:45,561 --> 00:39:48,438
<i>e eles recrutaram Robert
para me fazer parecer tolo.</i>

731
00:39:48,439 --> 00:39:51,775
Mas, Dr. Oppenheimer, já ouvimos
do Almirante Strauss que

732
00:39:51,942 --> 00:39:53,802
esses isótopos
poderiam ser usados

733
00:39:53,803 --> 00:39:56,472
para os inimigos
fazerem armas atômicas.

734
00:39:56,473 --> 00:39:59,415
Congressistas,
pode-se usar uma pá para isso.

735
00:39:59,416 --> 00:40:00,742
De fato, isso já acontece.

736
00:40:00,743 --> 00:40:03,708
Pode-se usar
uma garrafa de cerveja.

737
00:40:03,709 --> 00:40:06,470
- De fato, isso já acontece.
- Eu diria que isótopos

738
00:40:06,471 --> 00:40:08,855
são menos úteis
do que componentes eletrônicos,

739
00:40:08,856 --> 00:40:10,698
porém mais úteis
do que um sanduíche.

740
00:40:14,423 --> 00:40:16,317
<i>Genialidade não garante sabedoria.</i>

741
00:40:17,092 --> 00:40:19,792
Como esse homem que viu tanta coisa
pôde ser tão cego?

742
00:40:29,592 --> 00:40:30,892
Kitty?

743
00:40:35,420 --> 00:40:36,720
Kitty?

744
00:40:38,065 --> 00:40:39,365
Kitty.

745
00:40:39,666 --> 00:40:42,326
O projeto, eu entrei.

746
00:40:43,350 --> 00:40:45,888
- Eu entrei.
- Vamos comemorar.

747
00:40:51,877 --> 00:40:53,623
Não deveria
dar atenção a ele?

748
00:40:58,175 --> 00:41:01,530
Eu dei atenção a ele o dia todo.

749
00:41:25,345 --> 00:41:26,745
Venha aqui, meu amor.

750
00:41:27,121 --> 00:41:29,164
Não sei como dizer isso.

751
00:41:30,307 --> 00:41:32,017
Tenho vergonha de pedir.

752
00:41:32,318 --> 00:41:33,619
Diga.

753
00:41:34,017 --> 00:41:35,317
Fiquem com o Peter.

754
00:41:35,318 --> 00:41:38,218
- Claro.
- Não, só por um tempo, Hoke.

755
00:41:38,520 --> 00:41:39,820
Por um tempo.

756
00:41:41,969 --> 00:41:44,064
A Kitty sabe que você veio?

757
00:41:44,065 --> 00:41:45,365
Sim, claro que sabe.

758
00:41:45,966 --> 00:41:47,316
É claro que ela sabe.

759
00:41:48,309 --> 00:41:50,978
Somos pessoas horríveis.
Pessoas egoístas.

760
00:41:53,108 --> 00:41:54,408
Esqueça que pedi.

761
00:41:54,409 --> 00:41:56,233
Pessoas horríveis e egoístas

762
00:41:56,234 --> 00:41:58,972
não sabem
que são horríveis e egoístas.

763
00:41:59,445 --> 00:42:01,311
Sente-se, sente-se.

764
00:42:02,364 --> 00:42:06,560
Robert, você vê além do mundo
em que vivemos.

765
00:42:08,037 --> 00:42:10,026
E isso tem um preço.

766
00:42:10,757 --> 00:42:12,107
É claro que ajudaremos.

767
00:42:23,260 --> 00:42:25,512
Tudo está mudando, Robert.

768
00:42:25,513 --> 00:42:27,222
Ter filhos sempre muda...

769
00:42:27,223 --> 00:42:31,076
Não, o mundo está mudando
para uma nova direção.

770
00:42:31,928 --> 00:42:33,428
Está se reformulando.

771
00:42:35,689 --> 00:42:37,416
Este é o seu momento.

772
00:42:38,651 --> 00:42:40,403
Nós reuniremos um grupo
de estudo...

773
00:42:40,404 --> 00:42:43,096
"Nós" não deveríamos fazer nada.
Você deveria.

774
00:42:43,864 --> 00:42:45,949
O Lawrence não vai dar conta disso.

775
00:42:45,950 --> 00:42:48,335
Nem o Tolman, ou o Rabi.
Você vai.

776
00:42:57,429 --> 00:42:58,948
Quem são os milicos?

777
00:42:59,963 --> 00:43:01,507
Achei que você saberia.

778
00:43:03,734 --> 00:43:05,135
Dr. Oppenheimer.

779
00:43:06,136 --> 00:43:09,515
Sou o Cel. Groves.
Este é o Tenente-coronel Nichols.

780
00:43:09,516 --> 00:43:11,066
Mande lavar a seco.

781
00:43:16,855 --> 00:43:18,857
Se é assim que trata
um tenente-coronel,

782
00:43:18,858 --> 00:43:22,934
nem quero ver como trata
um humilde físico.

783
00:43:22,935 --> 00:43:24,588
Se eu conhecer algum,
eu aviso.

784
00:43:25,406 --> 00:43:28,072
- Ai.
- Frentes de combate no mundo todo,

785
00:43:28,073 --> 00:43:29,788
e eu tenho
que ficar em Washington.

786
00:43:30,291 --> 00:43:32,571
- Por quê?
- Eu construí o Pentágono.

787
00:43:32,572 --> 00:43:36,959
O comando gostou tanto que me fez
assumir o Distrito Manhattan.

788
00:43:37,662 --> 00:43:38,962
Que é...

789
00:43:38,963 --> 00:43:42,075
Não banque o espertinho.
Sabe muito bem o que é.

790
00:43:42,076 --> 00:43:44,340
Você e metade dos físicos
deste país.

791
00:43:44,341 --> 00:43:46,260
Esse é o problema número 1.

792
00:43:46,561 --> 00:43:49,679
Pensei que o número 1
seria garantir urânio suficiente.

793
00:43:49,680 --> 00:43:52,548
1.200 toneladas compradas
no dia que eu assumi.

794
00:43:52,549 --> 00:43:54,399
- Em processamento?
- Acabou de chegar

795
00:43:54,400 --> 00:43:55,700
a Oak Ridge, Tennessee.

796
00:43:56,488 --> 00:43:58,653
Agora preciso de um diretor
para o projeto.

797
00:43:59,182 --> 00:44:00,591
E surgiu o meu nome?

798
00:44:01,058 --> 00:44:02,358
Não.

799
00:44:02,700 --> 00:44:05,300
Mesmo tendo trazido
a física quântica para a América.

800
00:44:05,301 --> 00:44:06,991
O que me deixou curioso.

801
00:44:06,992 --> 00:44:08,349
E o que descobriu?

802
00:44:09,405 --> 00:44:13,337
Você é um diletante, um mulherengo,
um provável comunista...

803
00:44:13,338 --> 00:44:14,807
Sou um democrata do <i>New Deal</i>.

804
00:44:14,808 --> 00:44:16,403
Eu disse "provável."

805
00:44:16,404 --> 00:44:20,611
Instável, dramático,
egocêntrico, neurótico...

806
00:44:20,612 --> 00:44:23,564
Nada de bom, não é?
Nem um "ele é brilhante, mas..."

807
00:44:23,565 --> 00:44:26,307
Brilhantismo é esperado
no seu meio, então... não.

808
00:44:26,911 --> 00:44:29,960
O único que teve algo de bom
a dizer foi Richard Tolman.

809
00:44:30,651 --> 00:44:32,650
Ele acha que você é íntegro,

810
00:44:32,651 --> 00:44:34,952
mas ele me parece ser um cara

811
00:44:34,953 --> 00:44:37,319
que sabe mais de ciências
do que de pessoas.

812
00:44:37,677 --> 00:44:41,336
Ainda assim está aqui.
Você não confia muito.

813
00:44:41,337 --> 00:44:43,057
Não confio em nada.

814
00:44:46,782 --> 00:44:48,337
Por que não tem
um prêmio Nobel?

815
00:44:48,338 --> 00:44:49,639
Por que não é um general?

816
00:44:49,640 --> 00:44:52,376
- Me deram esse papel.
- Talvez eu tenha a mesma sorte.

817
00:44:52,377 --> 00:44:53,931
Um Nobel por fabricar
uma bomba?

818
00:44:53,932 --> 00:44:55,917
Alfred Nobel
inventou a dinamite.

819
00:44:58,638 --> 00:44:59,938
Como procederia, então?

820
00:45:01,801 --> 00:45:04,308
Está falando
sobre transformar teoria

821
00:45:04,641 --> 00:45:06,713
em um sistema prático de armas

822
00:45:06,714 --> 00:45:08,133
antes dos nazistas.

823
00:45:08,134 --> 00:45:09,868
Que têm uma vantagem
de 12 meses.

824
00:45:09,869 --> 00:45:11,969
- Dezoito.
- Como poderia saber disso?

825
00:45:11,970 --> 00:45:14,529
A pesquisa de nêutrons rápidos
levou 6 meses.

826
00:45:14,530 --> 00:45:17,402
O cara que estiver encarregado
já parte daí.

827
00:45:17,403 --> 00:45:19,911
- Quem assumirá o cargo?
- Werner Heisenberg.

828
00:45:19,912 --> 00:45:22,078
Ele tem a maior
compreensão intuitiva

829
00:45:22,079 --> 00:45:23,904
da estrutura atômica que já vi.

830
00:45:23,905 --> 00:45:25,906
- Conhece seu trabalho?
- Eu conheço ele.

831
00:45:25,907 --> 00:45:28,461
Como conheço Walther Bothe,
von Weizsäcker, Diebner.

832
00:45:28,462 --> 00:45:30,313
Na corrida direta,
os alemães vencem.

833
00:45:30,740 --> 00:45:32,720
- Só temos uma esperança.
- Qual é?

834
00:45:33,634 --> 00:45:34,934
Antissemitismo.

835
00:45:36,570 --> 00:45:37,870
O quê?

836
00:45:37,871 --> 00:45:40,424
Hitler chama a física quântica
de "ciência judaica."

837
00:45:40,425 --> 00:45:41,979
Disse isso na cara do Einstein.

838
00:45:41,980 --> 00:45:45,472
Nossa única chance é que Hitler
esteja tão cego de ódio,

839
00:45:45,473 --> 00:45:49,327
que negue recursos a Heisenberg,
pois serão muito necessários.

840
00:45:49,328 --> 00:45:51,179
Juntar os melhores
cientistas do país,

841
00:45:51,180 --> 00:45:54,059
- pois estão espalhados.
- O que causa setorização.

842
00:45:54,060 --> 00:45:55,913
Todos devem ter
visão geral da missão,

843
00:45:55,914 --> 00:45:57,415
para uma contribuição efetiva.

844
00:45:57,416 --> 00:46:00,986
Falta de segurança poderia nos custar
a corrida. A ineficácia custará.

845
00:46:01,426 --> 00:46:03,432
Enfim, os alemães sabem mais
do que nós.

846
00:46:03,433 --> 00:46:04,733
Mas os russos, não.

847
00:46:06,286 --> 00:46:09,507
Me relembre,
com quem estamos em guerra?

848
00:46:09,508 --> 00:46:13,269
Ninguém com seu passado
quer ser visto menosprezando

849
00:46:13,270 --> 00:46:16,390
a importância da proteção dada
por nossos aliados comunistas.

850
00:46:17,063 --> 00:46:19,469
Compreendo. Mas, não.

851
00:46:19,470 --> 00:46:21,315
Não pode dizer "não" a mim.

852
00:46:21,316 --> 00:46:23,582
É minha função dizer "não"
quando está errado.

853
00:46:24,009 --> 00:46:27,495
- Então está no cargo agora?
- Estou considerando.

854
00:46:30,325 --> 00:46:32,660
Começo a perceber
de onde vem sua reputação.

855
00:46:34,017 --> 00:46:35,710
Minha resposta favorita:

856
00:46:36,331 --> 00:46:39,237
"Oppenheimer não consegue gerir
uma barraca de hamburguer."

857
00:46:40,370 --> 00:46:41,670
Não mesmo.

858
00:46:43,619 --> 00:46:45,865
Mas posso gerir
o Projeto Manhattan.

859
00:46:47,085 --> 00:46:48,985
Há um modo
de equilibrar essas coisas.

860
00:46:49,591 --> 00:46:53,263
Deixe o Laboratório de Radiação
em Berkeley com o Lawrence

861
00:46:53,264 --> 00:46:55,418
e o de Metalurgia em Chicago,
com o Szilard.

862
00:46:55,419 --> 00:46:57,836
Refinação em larga escala,
onde mesmo? Tennessee?

863
00:46:57,837 --> 00:46:59,462
- E Hanford.
- E Hanford.

864
00:46:59,463 --> 00:47:02,969
Toda a força industrial
e de inovação científica do país

865
00:47:03,309 --> 00:47:06,627
conectadas por ferrovias,
com foco em um objetivo.

866
00:47:06,628 --> 00:47:09,953
Um ponto no espaço e no tempo.
E tudo se junta aqui.

867
00:47:09,954 --> 00:47:12,013
<i>Um laboratório secreto,
no meio do nada...</i>

868
00:47:12,014 --> 00:47:13,321
<i>Seguro, autossuficiente...</i>

869
00:47:13,322 --> 00:47:15,075
Equipamento, alojamento,
operações,

870
00:47:15,076 --> 00:47:17,119
tudo ficará lá até a conclusão.

871
00:47:17,120 --> 00:47:19,294
Precisaremos de escola,
lojas, uma igreja...

872
00:47:19,295 --> 00:47:20,296
Por quê?

873
00:47:20,297 --> 00:47:23,335
Sem suas famílias, os cientistas
não darão seu melhor.

874
00:47:23,336 --> 00:47:26,081
Se quer segurança,
construa uma cidade. Rápido.

875
00:47:26,082 --> 00:47:27,382
Onde?

876
00:47:31,191 --> 00:47:32,671
Bem-vindo a Los Alamos.

877
00:47:33,063 --> 00:47:35,370
Há uma escola que teremos de gerir,

878
00:47:35,371 --> 00:47:37,458
e indígenas vêm aqui
para ritos fúnebres.

879
00:47:37,459 --> 00:47:40,850
Além disso, nada. 65 km.
Em qualquer direção.

880
00:47:40,851 --> 00:47:42,860
É suficiente
para um local perfeito.

881
00:47:42,861 --> 00:47:44,162
Para...?

882
00:47:44,163 --> 00:47:45,514
Para o sucesso.

883
00:47:50,411 --> 00:47:51,918
Construam uma cidade para ele.

884
00:47:51,919 --> 00:47:53,219
Rápido.

885
00:47:54,424 --> 00:47:55,978
Vamos recrutar uns cientistas.

886
00:47:56,691 --> 00:47:58,346
Por que eu deixaria
minha família?

887
00:47:58,347 --> 00:48:00,150
Já disse que pode trazer
sua família.

888
00:48:00,151 --> 00:48:01,586
Não sou um soldado, Oppie.

889
00:48:01,587 --> 00:48:03,801
Soldado? Ele é general.

890
00:48:03,802 --> 00:48:05,402
Já tenho os soldados
necessários.

891
00:48:05,828 --> 00:48:07,128
O que digo a eles?

892
00:48:07,434 --> 00:48:09,514
Heisenberg, Diebner,
Bothe e Bohr.

893
00:48:09,515 --> 00:48:10,927
O que eles têm em comum?

894
00:48:10,928 --> 00:48:12,793
As maiores mentes
em teoria atômica.

895
00:48:12,794 --> 00:48:14,094
Sim. E...?

896
00:48:14,741 --> 00:48:16,127
Quantos você quiser...

897
00:48:17,433 --> 00:48:19,340
até sentir minhas botas
nas suas bolas.

898
00:48:20,101 --> 00:48:22,525
Você entende de isótopos
e você de explosivos

899
00:48:22,526 --> 00:48:24,182
melhores que qualquer um
no mundo.

900
00:48:24,183 --> 00:48:26,236
Mas não pode nos dizer
o que está fazendo?

901
00:48:29,541 --> 00:48:31,496
- Não sei.
- Eles estão com os nazistas.

902
00:48:31,497 --> 00:48:34,207
- Niels Bohr está em Copenhague.
- Sob domínio nazista.

903
00:48:34,208 --> 00:48:36,209
Pararam de imprimir jornais
em Princeton?

904
00:48:36,210 --> 00:48:38,456
Por que iríamos
para o meio do nada

905
00:48:38,457 --> 00:48:39,783
por sei lá quanto tempo?

906
00:48:39,784 --> 00:48:41,886
Por um ano ou dois.
Talvez três.

907
00:48:43,010 --> 00:48:44,310
General, poderia...

908
00:48:44,890 --> 00:48:46,210
nos dar um minuto?

909
00:48:47,410 --> 00:48:50,056
É sobre desencadear
uma grande força...

910
00:48:51,589 --> 00:48:53,101
antes que os nazistas o façam.

911
00:48:53,902 --> 00:48:55,208
Meu Deus.

912
00:48:55,209 --> 00:48:57,347
- Niels não ajudará os nazistas.
- Nunca.

913
00:48:57,348 --> 00:48:59,394
Mas enquanto ele está lá,
não o temos.

914
00:48:59,840 --> 00:49:01,142
Por isso preciso de você.

915
00:49:01,143 --> 00:49:02,867
Por que acha
que eu faria isso?

916
00:49:02,868 --> 00:49:04,541
"Por quê"...
Por quê?

917
00:49:05,080 --> 00:49:07,247
Talvez seja a droga de coisa
mais importante

918
00:49:07,248 --> 00:49:09,310
que acontecerá
na história mundial.

919
00:49:09,311 --> 00:49:10,617
Está bom para você?

920
00:49:11,253 --> 00:49:12,553
Vá se danar!

921
00:49:17,165 --> 00:49:19,211
Não me deixarão participar
deste projeto.

922
00:49:20,064 --> 00:49:22,557
Falhar com a segurança
prejudicaria uma carreira,

923
00:49:22,558 --> 00:49:23,943
mesmo após a guerra.

924
00:49:23,944 --> 00:49:26,483
Você é um colega de jornada.
Qual o problema?

925
00:49:26,484 --> 00:49:28,423
É uma urgência nacional.

926
00:49:28,424 --> 00:49:30,924
Tenho alguns segredos,
me deram a responsabilidade.

927
00:49:31,229 --> 00:49:32,529
Eles precisam de nós.

928
00:49:32,843 --> 00:49:34,143
Até não precisarem mais.

929
00:49:38,165 --> 00:49:40,244
Alguma chance de tirar
Bohr da Dinamarca?

930
00:49:40,245 --> 00:49:43,051
Nenhuma.
Sondei com os britânicos.

931
00:49:43,398 --> 00:49:46,002
Até os Aliados botarem os pés
de volta no continente,

932
00:49:46,003 --> 00:49:47,304
não vai ter jeito.

933
00:49:48,517 --> 00:49:49,824
Ele é tão importante?

934
00:49:49,825 --> 00:49:53,111
Quantos conhece que provaram
que Einstein estava errado?

935
00:49:54,171 --> 00:49:56,298
Seria bem mais rápido
pegar um avião.

936
00:49:56,299 --> 00:49:57,799
Não, avião é muito arriscado.

937
00:49:58,137 --> 00:49:59,450
O país precisa de nós.

938
00:50:02,851 --> 00:50:04,256
Os caras de Harvard disseram

939
00:50:04,257 --> 00:50:06,577
que o prédio é muito pequeno
para o cíclotron.

940
00:50:08,723 --> 00:50:10,383
Reúna-os com os arquitetos.

941
00:50:13,856 --> 00:50:15,716
Quando este lugar será aberto?

942
00:50:18,601 --> 00:50:19,901
Em dois meses.

943
00:50:21,015 --> 00:50:23,026
Robert, você é
um grande improvisador,

944
00:50:23,027 --> 00:50:24,327
mas isto...

945
00:50:25,417 --> 00:50:27,118
não dá pra ser feito
na sua cabeça.

946
00:50:28,120 --> 00:50:29,420
Quatro divisões:

947
00:50:30,498 --> 00:50:32,917
Experimental...
Teórica...

948
00:50:32,918 --> 00:50:34,268
Metalúrgica...
Bélica.

949
00:50:34,269 --> 00:50:35,663
Quem comanda a Teórica?

950
00:50:35,664 --> 00:50:38,104
- Eu.
- Era o que eu temia.

951
00:50:38,464 --> 00:50:39,764
Você está sobrecarregado.

952
00:50:40,796 --> 00:50:42,350
Então, você fica com a Teórica.

953
00:50:45,227 --> 00:50:48,033
Eu não virei para cá, Robert.

954
00:50:54,095 --> 00:50:55,395
Por que não?

955
00:51:01,574 --> 00:51:02,874
Você joga uma bomba

956
00:51:02,875 --> 00:51:05,486
e ela cai sobre os justos
e os injustos.

957
00:51:06,993 --> 00:51:09,680
Não quero que o ápice
de três séculos de Física

958
00:51:09,681 --> 00:51:11,546
seja uma arma
de destruição em massa.

959
00:51:21,422 --> 00:51:22,723
Izzy...

960
00:51:23,651 --> 00:51:27,788
Não sei se teremos crédito
com esta arma.

961
00:51:29,157 --> 00:51:32,460
Mas sei que os nazistas
não terão.

962
00:51:36,343 --> 00:51:37,656
Não temos escolha.

963
00:51:40,223 --> 00:51:41,529
Então...

964
00:51:42,989 --> 00:51:44,543
a segunda coisa
que tem de fazer

965
00:51:44,544 --> 00:51:47,842
é dar a Hans Bethe
o comando da Divisão Teórica.

966
00:51:50,023 --> 00:51:52,145
Espere, e qual é a primeira?

967
00:51:52,146 --> 00:51:54,458
Tirar esse uniforme ridículo.

968
00:51:54,459 --> 00:51:55,873
Você é um cientista.

969
00:51:55,874 --> 00:51:57,759
Groves insiste
para que tomemos parte.

970
00:51:57,760 --> 00:51:59,919
Mande Groves à merda.

971
00:51:59,920 --> 00:52:01,687
Eles precisam de nós
por quem somos.

972
00:52:01,688 --> 00:52:03,058
Então, seja você mesmo.

973
00:52:03,721 --> 00:52:05,060
Mas um pouco melhor.

974
00:52:44,868 --> 00:52:46,314
É a única chave.

975
00:52:46,315 --> 00:52:48,421
E Teller já está aqui.

976
00:52:48,836 --> 00:52:51,442
- Devo mandá-lo entrar?
- Não, esperaremos os outros.

977
00:52:59,232 --> 00:53:00,572
Vamos começar.

978
00:53:00,992 --> 00:53:02,292
Olá, Edward.

979
00:53:02,459 --> 00:53:03,759
Tudo bem.

980
00:53:03,760 --> 00:53:05,934
Senhores, trabalharemos aqui

981
00:53:05,935 --> 00:53:09,092
até a Divisão T,
em Los Alamos, estar pronta.

982
00:53:09,093 --> 00:53:11,299
- Edward, eu poderia...?
- É mais importante.

983
00:53:13,327 --> 00:53:15,354
Quando calculei
a reação em cadeia,

984
00:53:15,355 --> 00:53:17,433
descobri algo
muito preocupante.

985
00:53:18,373 --> 00:53:19,673
Não...

986
00:53:20,003 --> 00:53:21,519
Mas isso não pode estar certo.

987
00:53:21,879 --> 00:53:24,209
- Me mostre os cálculos.
- Está bem.

988
00:53:28,331 --> 00:53:31,651
- É exponencial.
- Não...

989
00:53:35,041 --> 00:53:36,599
Isso é fantasia.

990
00:53:36,600 --> 00:53:38,800
Os cálculos do Teller
não podem estar certos.

991
00:53:39,114 --> 00:53:41,479
Faça-os você mesmo,
enquanto vou a Princeton.

992
00:53:41,480 --> 00:53:43,719
- Para quê?
- Falar com Einstein.

993
00:53:43,720 --> 00:53:45,845
Acho que não há muito consenso
entre vocês.

994
00:53:45,846 --> 00:53:47,926
É por isso que quero ouvir
a opinião dele.

995
00:53:52,662 --> 00:53:53,962
Albert?

996
00:53:54,401 --> 00:53:57,238
Ah! Dr. Oppenheimer...

997
00:53:57,239 --> 00:53:58,738
Conhece o Dr. Gödel?

998
00:53:58,739 --> 00:54:00,619
Caminhamos aqui com frequência.

999
00:54:00,992 --> 00:54:04,732
As árvores têm as estruturas
mais inspiradoras.

1000
00:54:05,180 --> 00:54:07,140
Albert, posso falar com você?

1001
00:54:07,600 --> 00:54:09,513
Claro. Com licença, Kurt.

1002
00:54:11,433 --> 00:54:13,993
Há dias em que Kurt
se recusa a comer.

1003
00:54:14,326 --> 00:54:15,630
Mesmo em Princeton.

1004
00:54:15,631 --> 00:54:18,931
Ele está certo de que os nazistas
envenenaram a comida dele.

1005
00:54:24,598 --> 00:54:25,898
O quê...?

1006
00:54:30,205 --> 00:54:34,045
- De quem é este trabalho?
- Do Teller.

1007
00:54:35,243 --> 00:54:37,482
Qual sua compreensão sobre isso?

1008
00:54:37,903 --> 00:54:39,555
Nêutrons colidem com o núcleo,

1009
00:54:39,556 --> 00:54:43,102
liberando nêutrons para colidir
com outros núcleos.

1010
00:54:43,784 --> 00:54:47,463
Criticalidade: ponto irreversível
de uma força explosiva colossal.

1011
00:54:47,464 --> 00:54:50,477
Mas desta vez,
a reação em cadeia não para.

1012
00:54:50,990 --> 00:54:53,209
Incendiaria a atmosfera.

1013
00:54:55,260 --> 00:54:57,005
Ao detonarmos
um artefato atômico,

1014
00:54:57,006 --> 00:54:59,280
podemos iniciar
uma reação em cadeia que...

1015
00:55:00,559 --> 00:55:01,879
destruirá o mundo.

1016
00:55:02,816 --> 00:55:04,356
Então é isso, não é?

1017
00:55:04,723 --> 00:55:08,643
Perdido em seu mundo quântico
de probabilidades...

1018
00:55:09,044 --> 00:55:10,778
e precisando de convicção.

1019
00:55:11,324 --> 00:55:13,417
Você poderia fazer os cálculos?

1020
00:55:14,250 --> 00:55:18,922
A única coisa que temos em comum
é o desdém pela matemática.

1021
00:55:18,923 --> 00:55:21,222
Quem está trabalhando com isso
em Berkeley?

1022
00:55:21,223 --> 00:55:22,523
Hans Bethe.

1023
00:55:22,836 --> 00:55:24,422
Ele chegará à verdade.

1024
00:55:26,063 --> 00:55:28,449
E se a verdade for catastrófica?

1025
00:55:28,762 --> 00:55:30,066
Então você para.

1026
00:55:30,067 --> 00:55:33,308
E compartilha suas descobertas
com os nazistas.

1027
00:55:33,902 --> 00:55:36,622
Assim, nenhum lado
destrói o mundo.

1028
00:55:40,123 --> 00:55:41,423
Robert.

1029
00:55:42,843 --> 00:55:45,035
Isto é seu, não meu.

1030
00:55:58,792 --> 00:56:00,092
Teller está errado.

1031
00:56:00,471 --> 00:56:01,771
Ele está errado.

1032
00:56:03,697 --> 00:56:06,783
LABORATÓRIO DE RADIAÇÃO

1033
00:56:11,106 --> 00:56:13,933
Quando entendemos
as graves hipóteses do Teller,

1034
00:56:13,934 --> 00:56:15,351
o cenário real aparece.

1035
00:56:15,352 --> 00:56:16,652
Conclusão...?

1036
00:56:17,051 --> 00:56:19,304
As chances
de uma reação nuclear descontrolada

1037
00:56:19,305 --> 00:56:21,898
- são próximas de zero.
- "Próximas de zero"...

1038
00:56:22,904 --> 00:56:25,153
Oppie, essa notícia é ótima!

1039
00:56:26,484 --> 00:56:29,344
- Pode calcular novamente?
- Não, a resposta será a mesma.

1040
00:56:29,703 --> 00:56:31,363
Até realmente
detonarem um desses,

1041
00:56:31,364 --> 00:56:33,350
a melhor garantia que terá
será esta.

1042
00:56:33,810 --> 00:56:35,110
Próxima de zero.

1043
00:56:38,504 --> 00:56:40,623
A teoria te levará só
até um certo ponto.

1044
00:56:41,023 --> 00:56:42,948
- Olá!
- Oi!

1045
00:56:42,949 --> 00:56:45,341
- Sentimos saudades dele.
- Quer adotá-lo?

1046
00:56:45,342 --> 00:56:46,650
Ela está brincando.

1047
00:56:46,651 --> 00:56:48,849
Queríamos ver vocês,
antes de irmos embora.

1048
00:56:48,850 --> 00:56:51,257
Para lugares desconhecidos...

1049
00:56:52,443 --> 00:56:54,396
Sabe quem encontrei outro dia?

1050
00:56:54,723 --> 00:56:56,076
Eltenton.

1051
00:56:57,519 --> 00:57:00,064
O químico da Shell?
O cara do sindicato?

1052
00:57:00,065 --> 00:57:03,011
Isso... O cara
do Conselho Federal de Química.

1053
00:57:03,911 --> 00:57:06,971
Ele estava reclamando sobre
como estamos lidando com a guerra.

1054
00:57:07,344 --> 00:57:08,774
Em que sentido?

1055
00:57:08,775 --> 00:57:11,576
Falta de cooperação com
nossos aliados.

1056
00:57:11,577 --> 00:57:14,070
Parece que nosso governo
não está compartilhando

1057
00:57:14,071 --> 00:57:16,037
nenhuma pesquisa com a Rússia.

1058
00:57:16,038 --> 00:57:18,677
Ele disse que
"a maioria dos cientistas acha

1059
00:57:18,678 --> 00:57:20,304
que as regras são estúpidas."

1060
00:57:23,442 --> 00:57:25,280
- É mesmo?
- Sim.

1061
00:57:25,920 --> 00:57:29,906
Ele mencionou que se alguém
quisesse transmitir algo

1062
00:57:30,589 --> 00:57:32,307
por fora dos canais oficiais,

1063
00:57:32,308 --> 00:57:34,494
ele poderia ajudar.

1064
00:57:42,925 --> 00:57:44,254
Isso seria traição.

1065
00:57:45,437 --> 00:57:46,756
Sim, claro.

1066
00:57:47,543 --> 00:57:49,345
Só achei que deveria saber.

1067
00:57:51,705 --> 00:57:53,547
O fedelho apagou.

1068
00:57:54,001 --> 00:57:55,310
Onde estão os martinis?

1069
00:58:00,448 --> 00:58:01,748
Já saindo.

1070
00:58:02,189 --> 00:58:03,729
<i>A conversa acabou aí.</i>

1071
00:58:03,730 --> 00:58:05,980
Nada em nossa amizade de longa data

1072
00:58:05,981 --> 00:58:09,990
me levaria a crer que Chevalier
estava buscando informações,

1073
00:58:09,991 --> 00:58:11,451
e tenho plena certeza

1074
00:58:11,452 --> 00:58:14,795
que ele não sabia do trabalho
em que eu estava empenhado.

1075
00:58:19,395 --> 00:58:21,102
Já faz muito tempo que eu sei

1076
00:58:21,103 --> 00:58:24,190
que deveria ter reportado
esse incidente imediatamente.

1077
00:58:24,191 --> 00:58:28,799
<i>A situação Oppenheimer
realça a tensão entre cientistas</i>

1078
00:58:28,800 --> 00:58:30,344
e o aparato de segurança.

1079
00:58:30,345 --> 00:58:32,911
Para saber como o candidato
lidou com tais problemas

1080
00:58:32,912 --> 00:58:34,900
durante seu tempo na AEC,

1081
00:58:34,901 --> 00:58:37,810
teremos a presença
de um cientista diante do comitê.

1082
00:58:38,789 --> 00:58:41,209
- Quem eles trouxeram?
- Não disseram.

1083
00:58:41,210 --> 00:58:42,769
Sr. Presidente, se me permite,

1084
00:58:42,770 --> 00:58:45,388
sou indicado
à Secretaria do Comércio.

1085
00:58:45,389 --> 00:58:47,729
Por que pedir
a opinião de cientistas?

1086
00:58:47,730 --> 00:58:49,899
É um cargo de gabinete, almirante.

1087
00:58:49,900 --> 00:58:52,734
Buscamos uma ampla
gama de opiniões.

1088
00:58:52,735 --> 00:58:56,660
Gostaria de saber o nome
do tal cientista e de inquiri-lo.

1089
00:58:57,295 --> 00:58:58,910
Isto não é um julgamento.

1090
00:59:00,008 --> 00:59:01,309
Só formalidade?

1091
00:59:01,310 --> 00:59:05,089
Desde 1925 não recusam um indicado
ao gabinete presidencial.

1092
00:59:05,090 --> 00:59:07,339
São as regras do jogo.

1093
00:59:07,340 --> 00:59:09,799
É garantido, Lewis.
Fique tranquilo.

1094
00:59:09,800 --> 00:59:12,089
<i>Trouxeram um cientista. E daí?</i>

1095
00:59:12,090 --> 00:59:13,997
Não conhece cientistas
como eu conheço.

1096
00:59:13,998 --> 00:59:16,299
Guardam rancor de quem
questiona suas opiniões,

1097
00:59:16,300 --> 00:59:18,249
<i>principalmente se não for um deles.</i>

1098
00:59:18,250 --> 00:59:19,765
Eu fui presidente da AEC.

1099
00:59:19,766 --> 00:59:22,059
É fácil me culpar
pelo ocorrido com o Robert.

1100
00:59:22,060 --> 00:59:24,561
O Senado não pode achar
que a comunidade científica

1101
00:59:24,562 --> 00:59:25,888
não apoia o senhor.

1102
00:59:27,012 --> 00:59:28,505
Ou deveríamos mudar o jogo?

1103
00:59:28,506 --> 00:59:30,570
- Como?
- Acatando a ideia.

1104
00:59:31,109 --> 00:59:33,279
"Afrontei Oppenheimer,
e os EUA ganharam."

1105
00:59:33,280 --> 00:59:34,923
Não precisamos fazer isso.

1106
00:59:34,924 --> 00:59:37,119
Podemos chamar alguém
que conhece a verdade?

1107
00:59:37,120 --> 00:59:39,279
- Teller.
- Ele vai impressionar.

1108
00:59:39,280 --> 00:59:41,659
- Consegue o nome do cientista?
- Provavelmente.

1109
00:59:41,660 --> 00:59:44,789
Descubra se ele foi sediado
em Chicago ou Los Alamos na guerra.

1110
00:59:44,790 --> 00:59:47,445
- Por que isso importa?
- Se sediado em Chicago,

1111
00:59:47,446 --> 00:59:49,027
trabalhou com Szilárd e Fermi,

1112
00:59:49,028 --> 00:59:51,009
não com o culto
ao Oppie em Los Alamos.

1113
00:59:51,010 --> 00:59:52,491
Robert construiu o lugar.

1114
00:59:52,492 --> 00:59:54,492
Foi fundador, prefeito, xerife…

1115
00:59:55,029 --> 00:59:56,640
Tudo ao mesmo tempo.

1116
01:00:02,820 --> 01:00:04,820
PROJETO LOS ALAMOS
ENTRADA PRINCIPAL

1117
01:00:08,971 --> 01:00:11,109
Só falta um <i>saloon</i>.

1118
01:00:40,498 --> 01:00:41,806
Não há cozinha.

1119
01:00:43,061 --> 01:00:45,560
Sério? Vamos dar um jeito nisso.

1120
01:00:52,186 --> 01:00:54,864
Arame farpado, armas…

1121
01:00:55,468 --> 01:00:56,797
Oppie.

1122
01:00:56,798 --> 01:00:58,433
Estamos em guerra, Hans.

1123
01:01:00,800 --> 01:01:03,537
Halifax. 1917.

1124
01:01:03,538 --> 01:01:06,290
Um navio de carga carregando
munição explode no porto.

1125
01:01:08,880 --> 01:01:11,750
Há uma vasta e repentina
reação química.

1126
01:01:15,422 --> 01:01:18,260
A maior explosão causada
pelo homem na história.

1127
01:01:18,822 --> 01:01:23,088
Vamos calcular a destruição
se fosse uma reação nuclear,

1128
01:01:23,089 --> 01:01:25,060
e não química.

1129
01:01:25,061 --> 01:01:28,188
Indicando a energia
em termos de toneladas de TNT.

1130
01:01:28,189 --> 01:01:29,899
Mas seriam milhares.

1131
01:01:29,900 --> 01:01:33,070
Bem… Quilotoneladas, então.

1132
01:01:36,801 --> 01:01:39,739
Usando urânio-235,

1133
01:01:40,190 --> 01:01:41,866
a bomba precisará de um…

1134
01:01:42,724 --> 01:01:45,938
Desculpe. O mecanismo
precisará de uma esfera de 15kg

1135
01:01:45,939 --> 01:01:47,470
mais ou menos deste tamanho.

1136
01:01:47,471 --> 01:01:51,145
Ou usando plutônio,
a esfera de 5kg.

1137
01:01:52,690 --> 01:01:57,006
Eis a quantidade de urânio
que Oak Ridge refinou mês passado.

1138
01:02:00,587 --> 01:02:03,721
E a usina de Hanford
fez esse tanto de plutônio.

1139
01:02:05,673 --> 01:02:08,085
Se pudermos
potencializar essas quantias,

1140
01:02:08,086 --> 01:02:10,019
precisamos de um meio
para detoná-las.

1141
01:02:10,688 --> 01:02:12,272
Está entediante, Edward?

1142
01:02:13,017 --> 01:02:14,402
Um pouco, sim.

1143
01:02:14,403 --> 01:02:15,906
Posso saber por quê?

1144
01:02:15,907 --> 01:02:19,280
Entramos nesta sala sabendo
que uma bomba de fissão era viável.

1145
01:02:19,964 --> 01:02:21,989
Que tal sairmos daqui
com uma novidade?

1146
01:02:21,990 --> 01:02:25,489
- Qual, por exemplo?
- Em vez de urânio e plutônio,

1147
01:02:25,490 --> 01:02:26,790
usarmos hidrogênio.

1148
01:02:27,877 --> 01:02:29,541
- Hidrogênio pesado.
- Hidrogênio…

1149
01:02:29,542 --> 01:02:32,171
Deutério. Consegue imaginar?

1150
01:02:32,172 --> 01:02:33,921
Compactamos os átomos

1151
01:02:33,922 --> 01:02:37,505
sob grande pressão
para induzir uma reação de fusão.

1152
01:02:38,419 --> 01:02:40,926
Então não obteremos quilotons,

1153
01:02:40,927 --> 01:02:42,389
mas megatons.

1154
01:02:42,390 --> 01:02:45,187
- Uma grande reação de fissão…
- Certo. Silêncio.

1155
01:02:45,188 --> 01:02:49,769
Como gerar potência suficiente
para fundir átomos de hidrogênio?

1156
01:02:50,398 --> 01:02:51,850
Uma pequena bomba de fissão.

1157
01:02:52,430 --> 01:02:53,730
Lá vamos nós.

1158
01:02:55,610 --> 01:02:57,279
Já que vamos precisar de uma,

1159
01:02:57,280 --> 01:02:59,319
podemos voltar
ao assunto em questão?

1160
01:02:59,320 --> 01:03:00,641
A questão dos isótopos

1161
01:03:00,642 --> 01:03:04,327
não foi a mais importante
discordância de diretrizes

1162
01:03:04,328 --> 01:03:06,199
com o Dr. Oppenheimer.

1163
01:03:06,200 --> 01:03:08,387
Foi a bomba de hidrogênio, não?

1164
01:03:08,388 --> 01:03:13,153
Como colegas, concordávamos
em discordar em muitas coisas.

1165
01:03:13,154 --> 01:03:17,314
E uma delas era a necessidade
de um projeto para uma bomba H.

1166
01:03:30,692 --> 01:03:33,389
Obrigado por virem
tão em cima da hora.

1167
01:03:33,390 --> 01:03:34,896
Não posso acreditar.

1168
01:03:35,960 --> 01:03:37,439
Bem, aqui estamos.

1169
01:03:37,440 --> 01:03:39,404
Me ponham a par. O que sabemos?

1170
01:03:39,405 --> 01:03:41,964
Um dos nossos aviões
no Pacífico Norte

1171
01:03:41,965 --> 01:03:43,649
detectou radiação.

1172
01:03:43,650 --> 01:03:45,319
Temos os papéis filtro?

1173
01:03:45,320 --> 01:03:46,631
Não há dúvida do que seja.

1174
01:03:46,632 --> 01:03:48,271
A Casa Branca tem dúvidas.

1175
01:03:48,272 --> 01:03:49,791
Uma esperança infundada.

1176
01:03:49,792 --> 01:03:52,872
São os papéis filtro
de detecção de longo alcance?

1177
01:03:53,531 --> 01:03:54,916
É um teste atômico.

1178
01:03:58,419 --> 01:03:59,839
Os russos têm uma bomba.

1179
01:03:59,840 --> 01:04:02,995
Deveríamos estar
anos à frente deles, mas…

1180
01:04:03,760 --> 01:04:05,907
O que estavam fazendo
em Los Alamos?

1181
01:04:05,908 --> 01:04:07,259
A segurança não era rígida?

1182
01:04:07,260 --> 01:04:10,010
- Era, claro. Você não estava lá.
- Com licença, doutor…

1183
01:04:11,933 --> 01:04:13,310
Eu estava lá.

1184
01:04:14,303 --> 01:04:17,810
Agora podemos considerar
os mecanismos de detonação.

1185
01:04:17,811 --> 01:04:19,269
Alguma ideia?

1186
01:04:19,270 --> 01:04:20,696
Chamo este de "tiro".

1187
01:04:20,697 --> 01:04:24,235
Disparamos numa esfera maior
um pedaço de material cindível

1188
01:04:24,236 --> 01:04:26,700
com energia suficiente
para obter criticidade.

1189
01:04:27,030 --> 01:04:28,829
O que acham? Alguém?

1190
01:04:28,830 --> 01:04:30,579
Pensei em implosão.

1191
01:04:30,580 --> 01:04:33,660
Explosivos em volta da esfera
implodem, esmagando o material.

1192
01:04:34,660 --> 01:04:36,396
Gostaria de investigar essa ideia.

1193
01:04:36,397 --> 01:04:39,367
Falarei com a divisão Bélica,
para você fazer testes.

1194
01:04:39,368 --> 01:04:40,669
Mais alguém?

1195
01:04:40,670 --> 01:04:42,088
É um prazer vê-lo também.

1196
01:04:42,717 --> 01:04:44,799
Conheça o contingente britânico.

1197
01:04:44,800 --> 01:04:46,549
Dr. Oppenheimer, Klaus Fuchs.

1198
01:04:46,550 --> 01:04:47,914
Desde quando é britânico?

1199
01:04:47,915 --> 01:04:50,118
Desde que Hitler disse
que eu não era alemão.

1200
01:04:51,315 --> 01:04:52,890
Venha. Bem-vindo a Los Alamos.

1201
01:04:53,520 --> 01:04:55,230
A escola está funcionando.

1202
01:04:55,231 --> 01:04:57,311
O bar está sempre aberto.

1203
01:04:57,940 --> 01:05:00,773
E pensei numa maneira
de reduzir a equipe de apoio.

1204
01:05:01,891 --> 01:05:03,899
- Aquela é…
- A Sra. Serber, sim.

1205
01:05:03,900 --> 01:05:07,415
Ofereci emprego a todas as esposas.
Secretaria, biblioteca, computação…

1206
01:05:07,416 --> 01:05:09,498
Reduzimos o pessoal
e unimos as famílias.

1207
01:05:09,499 --> 01:05:11,659
- Elas são qualificadas?
- Não seja tolo.

1208
01:05:11,660 --> 01:05:13,498
São mentes brilhantes.

1209
01:05:13,499 --> 01:05:15,888
E já passaram
na verificação de segurança.

1210
01:05:15,889 --> 01:05:19,499
Informei ao General Groves sobre
os debates entre diversos setores.

1211
01:05:19,500 --> 01:05:20,839
Acabe com eles.

1212
01:05:20,840 --> 01:05:22,381
Compartimentação é a chave

1213
01:05:22,382 --> 01:05:24,509
- para a segurança…
- Só chefes de setor.

1214
01:05:24,510 --> 01:05:26,549
Que se comunicam
com os subordinados.

1215
01:05:26,550 --> 01:05:28,509
Não são burros.
Sabem ser discretos.

1216
01:05:28,510 --> 01:05:30,725
- Não gosto disso.
- Você não gosta de nada.

1217
01:05:30,726 --> 01:05:32,310
Não é parâmetro.

1218
01:05:37,960 --> 01:05:40,729
Uma vez por semana.
Só chefes de setor.

1219
01:05:40,730 --> 01:05:42,149
Quero trazer meu irmão.

1220
01:05:42,150 --> 01:05:43,450
Não.

1221
01:05:44,230 --> 01:05:45,900
Nichols…

1222
01:05:47,320 --> 01:05:50,069
Não sei se minha autorização
de segurança foi aprovada.

1223
01:05:50,070 --> 01:05:52,069
- Não foi.
- Vamos a Chicago amanhã.

1224
01:05:52,070 --> 01:05:53,370
Não. Espere.

1225
01:05:53,798 --> 01:05:56,414
Sabe que os nazistas
têm uma vantagem de dois anos.

1226
01:05:56,415 --> 01:05:59,650
Dr. Oppenheimer, a dificuldade
na obtenção da autorização

1227
01:05:59,651 --> 01:06:01,695
não é culpa minha, é sua.

1228
01:06:01,696 --> 01:06:03,632
Mas é problema seu.

1229
01:06:03,633 --> 01:06:05,209
Porque eu vou.

1230
01:06:05,210 --> 01:06:10,011
E quantas pessoas
havia nesses debates?

1231
01:06:10,012 --> 01:06:12,429
Muitas.
Compartimentação era a regra.

1232
01:06:12,430 --> 01:06:14,309
Era uma corrida contra os nazistas.

1233
01:06:14,310 --> 01:06:16,769
Agora a corrida
é contra os soviéticos.

1234
01:06:16,770 --> 01:06:18,349
- Só se dermos início.
- Robert.

1235
01:06:18,350 --> 01:06:21,729
Eles deram o tiro de partida.

1236
01:06:21,730 --> 01:06:24,092
Qual é a natureza
do dispositivo que detonaram?

1237
01:06:24,093 --> 01:06:27,609
Os dados indicam um dispositivo
de implosão de plutônio.

1238
01:06:27,610 --> 01:06:30,798
Como o que construíram
em Los Alamos.

1239
01:06:30,799 --> 01:06:33,819
Os russos têm uma bomba.
Truman quer saber o que vem depois.

1240
01:06:33,820 --> 01:06:35,789
Depois? Negociação de armas.

1241
01:06:35,790 --> 01:06:37,330
- Negociação.
- Óbvio.

1242
01:06:38,539 --> 01:06:41,473
E a "Super"? Truman sabe sobre ela?

1243
01:06:41,474 --> 01:06:44,524
- Nós o informamos disso?
- Não especificamente.

1244
01:06:44,525 --> 01:06:46,530
Não sabemos
se a bomba de hidrogênio

1245
01:06:46,531 --> 01:06:48,339
é tecnicamente viável.

1246
01:06:48,340 --> 01:06:50,075
Soube que Teller deu a ideia.

1247
01:06:50,076 --> 01:06:51,549
- Sim.
- Em Los Alamos?

1248
01:06:51,550 --> 01:06:53,495
Seus modelos
geralmente são inviáveis.

1249
01:06:53,496 --> 01:06:55,450
Teria que ser entregue por carreta.

1250
01:06:55,451 --> 01:06:57,705
- Não avião.
- Oppie.

1251
01:06:57,706 --> 01:07:00,139
Desculpe, Dr. Lawrence,
quer fazer um comentário?

1252
01:07:01,590 --> 01:07:02,890
Não.

1253
01:07:04,980 --> 01:07:07,158
Se assim podemos
voltar à liderança,

1254
01:07:07,159 --> 01:07:11,679
o presidente dos Estados Unidos
precisa saber disso.

1255
01:07:13,711 --> 01:07:18,511
E se os russos já souberem disso
de algum espião em Los Alamos,

1256
01:07:18,512 --> 01:07:19,893
precisamos dar início.

1257
01:07:19,894 --> 01:07:22,869
Não há provas de que havia
um espião em Los Alamos.

1258
01:07:22,870 --> 01:07:24,170
Robert.

1259
01:07:29,010 --> 01:07:30,704
Está debaixo do estádio?

1260
01:07:30,705 --> 01:07:32,300
O estádio foi desativado.

1261
01:07:32,621 --> 01:07:33,968
Melhor assim.

1262
01:07:36,180 --> 01:07:38,640
- Oppie.
- Dr. Fermi.

1263
01:07:41,430 --> 01:07:44,562
- Soube que tem uma cidadezinha.
- Sim. Está convidado.

1264
01:07:45,499 --> 01:07:47,980
Quem pensaria direito
num lugar como aquele?

1265
01:07:49,637 --> 01:07:51,778
Todo mundo vai enlouquecer.

1266
01:07:52,523 --> 01:07:54,910
Obrigado pelo voto de confiança,
Szilárd.

1267
01:07:55,700 --> 01:07:58,868
Precisamos anotar isso?

1268
01:07:59,490 --> 01:08:01,581
Quando farão os testes?

1269
01:08:01,582 --> 01:08:03,102
Já fizemos.

1270
01:08:03,103 --> 01:08:06,792
A primeira reação nuclear
em cadeia autossuficiente.

1271
01:08:07,380 --> 01:08:08,840
Groves não te disse?

1272
01:08:09,405 --> 01:08:10,705
Não.

1273
01:08:15,300 --> 01:08:18,034
Um de cada vez, por favor.

1274
01:08:18,035 --> 01:08:19,502
Dr. Oppenheimer?

1275
01:08:20,233 --> 01:08:21,929
Tentei recursos humanos.

1276
01:08:21,930 --> 01:08:24,599
- Pediram se eu podia datilografar.
- Você pode?

1277
01:08:24,600 --> 01:08:27,310
Não ensinam isso
no curso de química em Harvard.

1278
01:08:29,172 --> 01:08:31,746
Condon, ponha a Sra. Hornig
no time do plutônio.

1279
01:08:37,660 --> 01:08:39,529
O que foram fazer em Chicago?

1280
01:08:39,530 --> 01:08:41,951
- Fomos ao Laboratório de Metalurgia.
- Por quê?

1281
01:08:41,952 --> 01:08:44,079
Não pode falar…
Temos todo o direito…

1282
01:08:44,080 --> 01:08:46,408
Vocês têm os direitos
que eu autorizar.

1283
01:08:46,409 --> 01:08:47,829
Nem mais, nem menos.

1284
01:08:47,830 --> 01:08:50,195
Somos adultos tentando
executar um projeto aqui.

1285
01:08:50,196 --> 01:08:51,749
Isso é ridículo.

1286
01:08:51,750 --> 01:08:53,050
Diga a ele.

1287
01:08:54,594 --> 01:08:57,551
Concordamos com o protocolo
de compartimentação.

1288
01:08:58,090 --> 01:08:59,830
Chega dessa loucura.

1289
01:08:59,831 --> 01:09:01,790
É impossível trabalhar
nessas condições.

1290
01:09:01,791 --> 01:09:04,083
Quer saber, "generalíssimo"?

1291
01:09:04,783 --> 01:09:06,309
Eu me demito.

1292
01:09:06,310 --> 01:09:07,610
Obrigado por nada.

1293
01:09:09,770 --> 01:09:11,272
É melhor sem ele.

1294
01:09:12,525 --> 01:09:15,344
Sua maior preocupação
não é a discrição dele?

1295
01:09:16,190 --> 01:09:17,698
Mandamos matá-lo.

1296
01:09:19,530 --> 01:09:21,058
Só estava brincando.

1297
01:09:21,863 --> 01:09:24,321
Ele odeia a mim, não à América.

1298
01:09:24,322 --> 01:09:27,459
Sabe, general, nem todos têm
alavancas para puxar como eu.

1299
01:09:27,460 --> 01:09:29,037
Acho que não entendi.

1300
01:09:29,038 --> 01:09:31,539
Não me contratou apesar
do meu passado de esquerda.

1301
01:09:31,540 --> 01:09:33,295
Você me contratou por causa disso.

1302
01:09:34,009 --> 01:09:36,129
Para poder me controlar.

1303
01:09:36,130 --> 01:09:38,259
Ora, não sou tão sutil.

1304
01:09:38,682 --> 01:09:40,404
Sou só um humilde soldado.

1305
01:09:40,405 --> 01:09:44,105
Não é humilde nem um soldado.
Estudou Engenharia no MIT.

1306
01:09:44,106 --> 01:09:45,407
Você me pegou.

1307
01:09:45,408 --> 01:09:48,389
Já que nos entendemos,
me dê a autorização de segurança,

1308
01:09:48,390 --> 01:09:50,490
para que eu realize
esse milagre para você.

1309
01:09:56,138 --> 01:09:59,118
<i>General Groves, estava ciente
da ligação do Dr. Oppenheimer</i>

1310
01:09:59,119 --> 01:10:01,319
<i>com o partido de esquerda
quando o designou?</i>

1311
01:10:01,320 --> 01:10:03,400
Sabia que havia suspeitas.

1312
01:10:03,401 --> 01:10:06,607
Sabia que ele tinha um histórico
extremamente liberal.

1313
01:10:06,608 --> 01:10:09,749
Na sua opinião, ele cometeria
um ato desleal conscientemente?

1314
01:10:09,750 --> 01:10:11,659
Eu ficaria surpreso.

1315
01:10:11,660 --> 01:10:14,535
Então, tinha total confiança
na integridade dele.

1316
01:10:14,536 --> 01:10:17,299
Em Los Alamos, sim.
Onde realmente o conheci.

1317
01:10:17,300 --> 01:10:20,437
General, seus agentes de segurança
do projeto o alertaram

1318
01:10:20,438 --> 01:10:22,389
contra a autorização
do Dr. Oppenheimer?

1319
01:10:22,390 --> 01:10:26,280
Eles não poderiam e não iriam
autorizá-lo sem minha insistência.

1320
01:10:26,281 --> 01:10:27,932
E é seguro dizer que conhecia bem

1321
01:10:27,933 --> 01:10:30,021
o dossiê de segurança
do Dr. Oppenheimer?

1322
01:10:30,022 --> 01:10:31,322
Conhecia.

1323
01:10:31,709 --> 01:10:34,321
Então só preciso
de uma resposta hoje.

1324
01:10:34,322 --> 01:10:36,399
À luz das atuais diretrizes da AEC,

1325
01:10:36,400 --> 01:10:38,989
autorizaria o Dr. Oppenheimer hoje?

1326
01:10:38,990 --> 01:10:40,860
Tem as diretrizes?

1327
01:10:48,160 --> 01:10:50,619
Sob as atuais diretrizes da AEC,

1328
01:10:50,620 --> 01:10:54,001
autorizaria o Dr. Oppenheimer hoje?

1329
01:11:05,851 --> 01:11:07,640
Física e Novo México?

1330
01:11:08,768 --> 01:11:11,959
Meu Deus, que viagem!

1331
01:11:11,960 --> 01:11:14,843
Precisa de um intermediário.
Indico o Lomanitz.

1332
01:11:15,888 --> 01:11:17,189
Você vai ficar bem.

1333
01:11:17,190 --> 01:11:18,530
Por aqui, cavalheiros.

1334
01:11:28,188 --> 01:11:29,489
Dr. Lawrence.

1335
01:11:29,490 --> 01:11:30,791
Leslie.

1336
01:11:30,792 --> 01:11:32,909
Lembre-se
do que conversamos em Berkeley.

1337
01:11:32,910 --> 01:11:35,167
Compartimentação.
Entendo completamente.

1338
01:11:40,498 --> 01:11:41,798
Obrigado.

1339
01:11:50,124 --> 01:11:51,611
<i>Saudações de Berkeley.</i>

1340
01:11:51,612 --> 01:11:53,544
Vim atualizá-los
sobre nosso progresso

1341
01:11:53,545 --> 01:11:55,013
e solicitar sua contribuição.

1342
01:11:55,014 --> 01:11:56,519
Portanto, terei que partilhar

1343
01:11:56,520 --> 01:11:59,441
algumas coisas
que o General Groves me proibiu.

1344
01:12:00,070 --> 01:12:02,989
Desculpe, General. Eu disse
que entendo, não que concordo.

1345
01:12:02,990 --> 01:12:04,533
Certo.

1346
01:12:04,534 --> 01:12:06,699
Senhores, ao trabalho.

1347
01:12:06,700 --> 01:12:08,797
Havia rumores
de espionagem em Los Alamos.

1348
01:12:08,798 --> 01:12:10,309
Infundados.

1349
01:12:10,310 --> 01:12:13,393
Me disseram que havia
comunistas no projeto.

1350
01:12:13,394 --> 01:12:15,695
- Não contratamos comunistas.
- Só quero saber…

1351
01:12:15,696 --> 01:12:18,296
Algum deles se envolveu
na discussão sobre a "Super"?

1352
01:12:18,297 --> 01:12:21,047
Me lembro que solicitou
a ida do seu irmão a Los Alamos.

1353
01:12:21,048 --> 01:12:22,879
Meu irmão já havia
deixado o partido.

1354
01:12:22,880 --> 01:12:25,737
- E Lomanitz?
- Nunca trabalhou em Los Alamos.

1355
01:12:25,738 --> 01:12:28,141
Era um intermediário.
Nossa segurança era rígida.

1356
01:12:28,142 --> 01:12:29,921
O Coronel Nichols bem sabe.

1357
01:12:29,922 --> 01:12:32,623
Dentro do possível,
visto as personalidades envolvidas.

1358
01:12:32,624 --> 01:12:35,020
- Mas tentativas eram feitas.
- Como assim?

1359
01:12:35,021 --> 01:12:36,940
Todos nós lemos o arquivo dele.

1360
01:12:37,717 --> 01:12:39,940
Precisamos falar
sobre Jean Tatlock?

1361
01:12:40,770 --> 01:12:43,068
Ou do incidente Chevalier?

1362
01:12:47,269 --> 01:12:48,599
Com licença.

1363
01:12:50,830 --> 01:12:53,370
Lomanitz na linha 1.

1364
01:12:59,788 --> 01:13:01,089
Olá, Rossi.

1365
01:13:01,090 --> 01:13:04,085
<i>Como? Tudo bem, se acalme.</i>

1366
01:13:04,967 --> 01:13:08,089
Mais uma confusão.
Lomanitz acabou de ser convocado.

1367
01:13:08,090 --> 01:13:10,969
- Estamos em guerra, doutor.
- Não seja idiota, Nichols.

1368
01:13:10,970 --> 01:13:13,059
Precisamos do garoto.
Dê um jeito nisso.

1369
01:13:13,060 --> 01:13:14,361
Não foi um erro.

1370
01:13:14,362 --> 01:13:15,663
Seu amigo Lomanitz

1371
01:13:15,664 --> 01:13:17,900
tentou sindicalizar
o pessoal do laboratório.

1372
01:13:17,901 --> 01:13:20,465
- Ele prometeu parar.
- Mas não parou.

1373
01:13:21,096 --> 01:13:23,000
O agente de segurança
em Berkeley temia

1374
01:13:23,001 --> 01:13:25,739
uma infiltração comunista
através daquele sindicato…

1375
01:13:25,740 --> 01:13:27,876
- F.A...
- F.A.E.C.T.

1376
01:13:30,466 --> 01:13:34,161
Semana que vem estarei lá
e falarei com ele.

1377
01:13:36,125 --> 01:13:38,060
Sua credencial de liberação chegou.

1378
01:13:41,258 --> 01:13:45,380
É importante não manter nem renovar
associações questionáveis.

1379
01:13:50,194 --> 01:13:52,809
<i>O doutor acha que o contato social
entre uma pessoa</i>

1380
01:13:52,810 --> 01:13:55,052
encarregada de uma missão
de guerra secreta

1381
01:13:55,053 --> 01:13:56,479
e comunistas era perigoso?

1382
01:13:56,480 --> 01:13:59,603
Minha noção de perigo
estaria aprimorada hoje.

1383
01:14:00,230 --> 01:14:03,149
É justo dizer que,
durante os anos em guerra,

1384
01:14:03,150 --> 01:14:06,360
<i>você sentia que tais contatos
eram potencialmente perigosos?</i>

1385
01:14:12,648 --> 01:14:15,160
<i>Possivelmente perigosos, sim.</i>

1386
01:14:15,695 --> 01:14:16,995
<i>Estou falando sério.</i>

1387
01:14:18,080 --> 01:14:19,830
<i>Comunistas conhecidos.</i>

1388
01:14:21,584 --> 01:14:23,085
<i>Olha…</i>

1389
01:14:24,460 --> 01:14:26,089
Guardei muitos…

1390
01:14:26,090 --> 01:14:28,657
<i>segredos em minha mente
por muito tempo.</i>

1391
01:14:29,687 --> 01:14:32,849
<i>Não importa com quem me associe.</i>

1392
01:14:32,850 --> 01:14:34,304
Não falo sobre tais segredos.

1393
01:14:41,690 --> 01:14:43,400
Disse em seu depoimento

1394
01:14:44,263 --> 01:14:49,030
que precisou ver
Jean Tatlock em 1943.

1395
01:14:50,621 --> 01:14:52,200
Você foi embora.

1396
01:14:53,385 --> 01:14:54,820
Não disse uma palavra.

1397
01:14:55,409 --> 01:14:57,490
Como achou que eu me sentiria?

1398
01:14:58,488 --> 01:14:59,789
Eu escrevi.

1399
01:14:59,790 --> 01:15:01,870
Páginas cheias de nada.

1400
01:15:04,290 --> 01:15:05,836
Para onde você foi?

1401
01:15:07,673 --> 01:15:09,306
- Não posso dizer.
- Por que não?

1402
01:15:09,307 --> 01:15:10,924
Porque você é uma comunista.

1403
01:15:13,510 --> 01:15:15,599
Por que precisou vê-la?

1404
01:15:15,600 --> 01:15:20,222
Porque ela manifestou grande desejo
de me ver antes de partirmos.

1405
01:15:20,223 --> 01:15:24,505
À época, eu não podia,
mas senti que ela precisava me ver.

1406
01:15:25,108 --> 01:15:28,012
Ela fazia tratamento psiquiátrico.

1407
01:15:28,013 --> 01:15:30,029
Estava extremamente infeliz.

1408
01:15:30,030 --> 01:15:32,237
Descobriu por que
ela precisava ver você?

1409
01:15:37,216 --> 01:15:39,278
Porque ela continuava
apaixonada por mim.

1410
01:15:46,670 --> 01:15:48,500
Passaram a noite juntos, não é?

1411
01:15:56,218 --> 01:15:57,518
Passamos.

1412
01:16:03,862 --> 01:16:06,967
Você entrou e saiu da minha vida,

1413
01:16:06,968 --> 01:16:09,609
e não precisa me dizer por quê.

1414
01:16:09,610 --> 01:16:11,069
Isso que é poder.

1415
01:16:11,070 --> 01:16:13,007
Não que eu goste.

1416
01:16:13,820 --> 01:16:16,409
Preferia estar aqui
quando você precisasse.

1417
01:16:16,410 --> 01:16:18,909
Mas tem outras prioridades agora.

1418
01:16:19,528 --> 01:16:21,490
Tenho esposa e filho.

1419
01:16:22,537 --> 01:16:25,220
Não é sobre isso
que estamos falando.

1420
01:16:28,687 --> 01:16:29,987
Jean.

1421
01:16:30,689 --> 01:16:32,214
Você me convidou.

1422
01:16:33,255 --> 01:16:35,096
E estou feliz por ter vindo.

1423
01:16:35,970 --> 01:16:37,761
Mas não posso ver você novamente.

1424
01:16:40,817 --> 01:16:42,519
Mas e se eu precisar de você?

1425
01:16:46,100 --> 01:16:48,943
Disse que sempre responderia.

1426
01:16:51,480 --> 01:16:52,780
Nem uma palavra?

1427
01:16:53,860 --> 01:16:55,779
<i>Achou que isso seria seguro?</i>

1428
01:16:55,780 --> 01:16:57,860
De fato era seguro.

1429
01:16:58,504 --> 01:17:00,159
<i>Nem uma palavra.</i>

1430
01:17:00,160 --> 01:17:02,190
Quando voltou a vê-la?

1431
01:17:10,754 --> 01:17:12,423
Nunca mais a vi.

1432
01:17:18,890 --> 01:17:21,350
Posso pegar o último trem
para Princeton.

1433
01:17:21,923 --> 01:17:24,639
Kitty, eu não disse nada
que você já não soubesse.

1434
01:17:24,640 --> 01:17:27,900
- Hoje contou para o mundo.
- É uma audiência fechada.

1435
01:17:30,020 --> 01:17:32,477
Você bem que gostaria
de divulgar a transcrição.

1436
01:17:32,478 --> 01:17:33,779
Foi sob juramento.

1437
01:17:33,780 --> 01:17:36,612
Estava sob juramento comigo
quando foi ver a Jean.

1438
01:17:37,725 --> 01:17:39,160
Quer saber…

1439
01:17:39,976 --> 01:17:42,658
Você fica sentado aí, dia após dia,

1440
01:17:43,585 --> 01:17:46,096
dissertando sobre nossas vidas.

1441
01:17:48,299 --> 01:17:50,000
Por que não luta?

1442
01:17:53,191 --> 01:17:56,377
Robert, não permitirei
que ela testemunhe.

1443
01:18:01,792 --> 01:18:04,587
Dr. Oppenheimer, é uma honra.
Por favor, sente-se.

1444
01:18:04,588 --> 01:18:05,889
Não há necessidade.

1445
01:18:05,890 --> 01:18:08,904
Só quero esclarecer se devo
falar com Lomanitz,

1446
01:18:08,905 --> 01:18:10,547
considerando sua preocupação.

1447
01:18:10,548 --> 01:18:13,550
Diria que é escolha sua, professor,
mas eu teria cautela.

1448
01:18:13,551 --> 01:18:15,029
Entendido.

1449
01:18:15,030 --> 01:18:17,637
E em relação ao sindicato,

1450
01:18:17,638 --> 01:18:19,389
quero dar um alerta sobre…

1451
01:18:19,390 --> 01:18:21,911
- um homem chamado Eltenton.
- Um alerta?

1452
01:18:21,912 --> 01:18:25,830
Sim. Valeria a pena observá-lo.

1453
01:18:26,890 --> 01:18:28,606
Adoraria saber mais detalhes.

1454
01:18:28,607 --> 01:18:32,067
Bem, tenho um compromisso agora
e vou embora amanhã cedo.

1455
01:18:32,068 --> 01:18:33,879
Volte o mais cedo que puder.

1456
01:18:33,880 --> 01:18:35,840
Já que está sem tempo agora.

1457
01:18:36,684 --> 01:18:38,629
Voltou na manhã seguinte.

1458
01:18:38,630 --> 01:18:40,680
Voltei. Precisei voltar.

1459
01:18:41,489 --> 01:18:42,890
<i>Havia outro cara.</i>

1460
01:18:44,966 --> 01:18:46,469
Disse que seu nome era Pash.

1461
01:18:46,470 --> 01:18:49,139
Pash? Conheceu o Coronel Pash?

1462
01:18:49,140 --> 01:18:50,791
O Coronel poderia ler, por favor,

1463
01:18:50,792 --> 01:18:54,439
seu memorando
de 29 de junho de 1943?

1464
01:18:56,060 --> 01:18:58,595
"Resultados da vigilância
efetuada ao sujeito

1465
01:18:58,596 --> 01:19:01,529
indicam novas possíveis
conexões com o Partido Comunista.

1466
01:19:01,530 --> 01:19:03,808
O sujeito passou
um tempo considerável

1467
01:19:03,809 --> 01:19:07,437
com a conhecida Jean Tatlock,
comunista, registro em anexo."

1468
01:19:07,438 --> 01:19:09,230
O sujeito sendo o Dr. Oppenheimer?

1469
01:19:09,231 --> 01:19:11,473
- Sim.
- Que você não conhecia?

1470
01:19:11,474 --> 01:19:13,075
Eu o conheci pouco tempo depois.

1471
01:19:13,076 --> 01:19:15,978
É chefe de segurança do projeto.
Eu não deveria conhecê-lo?

1472
01:19:15,979 --> 01:19:19,511
Não. Ele deveria conhecer você.
Jamais o deixaria a sós com Pash.

1473
01:19:19,512 --> 01:19:22,832
- Por que não?
- Quando Pash soube do Lomanitz,

1474
01:19:22,833 --> 01:19:26,011
ele disse ao FBI
que o sequestraria,

1475
01:19:26,012 --> 01:19:27,557
o levaria de barco

1476
01:19:27,558 --> 01:19:30,310
e o interrogaria à maneira russa.

1477
01:19:33,106 --> 01:19:35,707
O General Groves me depositou
certa responsabilidade,

1478
01:19:35,708 --> 01:19:37,816
e é como ter um filho
que não posso ver.

1479
01:19:38,578 --> 01:19:40,148
Por controle remoto.

1480
01:19:41,311 --> 01:19:43,004
Então, conhecê-lo pessoalmente é…

1481
01:19:44,739 --> 01:19:47,290
- Não tomarei muito do seu tempo.
- Não se preocupe.

1482
01:19:47,291 --> 01:19:48,731
Leve o tempo que quiser.

1483
01:19:49,412 --> 01:19:51,963
O Sr. Johnson me contou
sobre uma conversa sua ontem

1484
01:19:51,964 --> 01:19:53,265
em que estou interessado.

1485
01:19:53,266 --> 01:19:54,666
Passei o dia preocupado.

1486
01:19:54,667 --> 01:19:58,905
Sim. Bem, não queria conversar
com Lomanitz sem autorização.

1487
01:19:58,906 --> 01:20:00,865
Não é meu interesse principal.

1488
01:20:00,866 --> 01:20:02,590
É algo um pouco mais…

1489
01:20:03,500 --> 01:20:05,549
Bem, na minha opinião, mais sério.

1490
01:20:05,550 --> 01:20:09,874
Quando o FBI disse que a informação
seria inadmissível no tribunal,

1491
01:20:09,875 --> 01:20:13,795
Pash afirmou não ter intenção
de deixar testemunha para acusá-lo.

1492
01:20:13,796 --> 01:20:17,229
O FBI o desencorajou,
mas não se brinca com ele.

1493
01:20:17,230 --> 01:20:19,970
Já deve saber que há outras pessoas

1494
01:20:19,971 --> 01:20:22,609
interessadas no trabalho
do Laboratório de Radiação.

1495
01:20:23,134 --> 01:20:26,326
Um homem associado
ao cônsul soviético

1496
01:20:26,327 --> 01:20:29,579
indicou, através de intermediários,

1497
01:20:29,580 --> 01:20:31,289
a envolvidos nesse projeto,

1498
01:20:31,290 --> 01:20:34,727
que ele estava em posição
de transmitir informações.

1499
01:20:34,728 --> 01:20:37,170
Por que alguém
do projeto faria isso?

1500
01:20:39,152 --> 01:20:41,419
Francamente,
vejo que há certa lógica

1501
01:20:41,420 --> 01:20:43,879
no comandante-em-chefe
informar os russos,

1502
01:20:43,880 --> 01:20:45,971
afinal, eles são nossos aliados,

1503
01:20:45,972 --> 01:20:48,767
mas não gosto da ideia
de fazê-lo às escondidas.

1504
01:20:48,768 --> 01:20:51,285
Não custa nada
estar atento a isso.

1505
01:20:52,282 --> 01:20:54,022
E você disse isso ao Pash?

1506
01:20:54,023 --> 01:20:58,439
Tentei contextualizar
que a Rússia não é a Alemanha.

1507
01:20:58,440 --> 01:21:03,111
Boris Pash é o filho
de um bispo ortodoxo russo.

1508
01:21:03,112 --> 01:21:05,731
Nascido aqui, mas em 1918
ele voltou para a Rússia,

1509
01:21:05,732 --> 01:21:07,702
para combater os bolcheviques.

1510
01:21:07,703 --> 01:21:10,449
É um homem que matou comunistas
com as próprias mãos.

1511
01:21:10,450 --> 01:21:13,521
Não decido quem deve
ou não ter informações.

1512
01:21:13,522 --> 01:21:15,790
É meu trabalho impedir
que vazem ilegalmente.

1513
01:21:16,407 --> 01:21:17,958
Poderia ser mais específico?

1514
01:21:20,693 --> 01:21:24,369
Há um homem cujo nome
me foi mencionado algumas vezes.

1515
01:21:24,370 --> 01:21:25,670
Eltenton.

1516
01:21:26,788 --> 01:21:29,929
Acredito ser um químico
que trabalha na Shell.

1517
01:21:29,930 --> 01:21:32,509
Ele falou com um amigo dele,

1518
01:21:32,510 --> 01:21:36,060
que é conhecido
de alguém do projeto.

1519
01:21:38,219 --> 01:21:40,205
Achou que Pash
se daria por satisfeito?

1520
01:21:40,206 --> 01:21:44,093
Tentei entregar Eltenton
sem jogar a merda no ventilador.

1521
01:21:44,094 --> 01:21:46,069
Contei a eles uma ladainha.

1522
01:21:46,070 --> 01:21:48,592
- Mentiu ao General Groves também?
- Não.

1523
01:21:48,593 --> 01:21:51,239
Admiti a ele que menti para Pash.

1524
01:21:51,240 --> 01:21:55,004
Se lembra dessa conversa
sobre o incidente Chevalier?

1525
01:21:55,005 --> 01:21:56,997
Ouvi tantas versões dela.

1526
01:21:57,699 --> 01:22:00,197
Não estava confuso,
mas agora estou ficando.

1527
01:22:00,198 --> 01:22:01,499
E qual foi sua conclusão?

1528
01:22:01,500 --> 01:22:03,446
Que ele estava sob influência

1529
01:22:03,447 --> 01:22:06,908
de atitude típica
da camaradagem americana,

1530
01:22:06,909 --> 01:22:10,429
de que é errado dedurar um amigo.

1531
01:22:10,430 --> 01:22:11,730
Ora…

1532
01:22:12,366 --> 01:22:15,019
Podemos saber
quem efetuou o contato?

1533
01:22:15,020 --> 01:22:19,216
Isso envolveria pessoas
que não devem ser envolvidas nisso.

1534
01:22:19,217 --> 01:22:22,309
É algum membro do projeto?

1535
01:22:22,310 --> 01:22:26,360
Um membro da faculdade, sim,
mas não do projeto.

1536
01:22:27,786 --> 01:22:29,529
Então Eltenton fez sua abordagem

1537
01:22:29,530 --> 01:22:32,620
através de um membro
da faculdade aqui de Berkeley?

1538
01:22:34,278 --> 01:22:36,934
Até onde eu sei, sim.

1539
01:22:36,935 --> 01:22:38,814
Mas talvez haja…

1540
01:22:39,673 --> 01:22:42,040
mais de uma pessoa envolvida.

1541
01:22:46,000 --> 01:22:49,408
Cavalheiros,
se pareço pouco cooperativo,

1542
01:22:49,409 --> 01:22:52,299
creio que possam entender
que é devido à minha insistência

1543
01:22:52,300 --> 01:22:54,508
em não acusar pessoas inocentes.

1544
01:22:54,509 --> 01:22:56,429
<i>Está tentando proteger seu amigo.</i>

1545
01:22:56,430 --> 01:22:59,309
- Quem vai proteger você?
- Bem que você poderia.

1546
01:22:59,310 --> 01:23:02,519
- Se me der o nome.
- Se ordenar, eu o faço.

1547
01:23:02,520 --> 01:23:05,150
Seria um erro, Robert.
Precisa ser voluntário.

1548
01:23:06,591 --> 01:23:08,629
<i>- E ele lhe deu o nome?
- Sim.</i>

1549
01:23:08,630 --> 01:23:10,401
- Não naquele momento, certo?
- Não.

1550
01:23:10,402 --> 01:23:12,240
Não. Passaram-se meses, não?

1551
01:23:12,768 --> 01:23:14,069
Verdade.

1552
01:23:14,070 --> 01:23:16,785
- Você me acha persistente.
- Bem, você é…

1553
01:23:16,786 --> 01:23:18,982
Você é persistente,
mas seu trabalho é esse.

1554
01:23:18,983 --> 01:23:22,403
E o meu trabalho é proteger
as pessoas que trabalham para mim.

1555
01:23:22,404 --> 01:23:24,438
Ao invés de darmos
certos passos,

1556
01:23:24,439 --> 01:23:26,574
o que pode chamar
sua atenção...

1557
01:23:27,943 --> 01:23:29,710
e perturbá-lo,

1558
01:23:29,711 --> 01:23:32,848
eu gostaria de discutir tais passos
primeiro com o senhor.

1559
01:23:32,849 --> 01:23:34,582
Não estou formulando
um plano,

1560
01:23:34,583 --> 01:23:36,751
só preciso assimilar
o conjunto todo.

1561
01:23:40,388 --> 01:23:43,091
<i>Nos meses entre seu encontro</i>

1562
01:23:43,092 --> 01:23:46,761
com o Dr. Oppenheimer
e a indicação final de Chevalier,

1563
01:23:46,762 --> 01:23:49,812
dispensou recursos tentando
descobrir o nome do intermediário?

1564
01:23:49,813 --> 01:23:52,100
Recursos consideráveis, sim.

1565
01:23:52,101 --> 01:23:54,551
Sem ele, nosso trabalho
era extremamente difícil.

1566
01:23:54,552 --> 01:23:57,105
- E quando recebeu o nome?
- Eu já estava fora

1567
01:23:57,106 --> 01:23:59,506
- quando Oppenheimer entregou.
- Se foi?

1568
01:23:59,507 --> 01:24:02,157
Acharam que meu tempo seria
melhor empregado na Europa

1569
01:24:02,158 --> 01:24:04,608
determinando o status
do projeto da bomba nazista.

1570
01:24:04,609 --> 01:24:08,634
- Quem achou?
- General Groves.

1571
01:24:08,635 --> 01:24:10,384
Ele me transferiu
para Londres.

1572
01:24:16,825 --> 01:24:19,127
<i>É um pouco cedo
para uma festa de Natal.</i>

1573
01:24:19,128 --> 01:24:20,963
Algo aconteceu.

1574
01:24:20,964 --> 01:24:23,031
Tolman se mandou.

1575
01:24:23,032 --> 01:24:24,765
Para onde?

1576
01:24:24,766 --> 01:24:26,367
Ruth não quer contar.

1577
01:24:36,078 --> 01:24:37,612
Por favor, Ruthie.

1578
01:24:37,613 --> 01:24:39,714
Se não pode me contar,
a quem você pode?

1579
01:24:39,715 --> 01:24:42,483
Compartimentação, Oppie.

1580
01:24:42,484 --> 01:24:44,771
O que faz você pensar
que sei onde ele está?

1581
01:24:44,772 --> 01:24:46,254
Porque você é boa em saber

1582
01:24:46,255 --> 01:24:48,422
onde está o Sr. Tolman
quando precisa.

1583
01:24:49,325 --> 01:24:53,461
- Como agora?
- Atenção!

1584
01:24:56,464 --> 01:24:58,664
Presente adiantado de Natal
para vocês todos.

1585
01:25:06,494 --> 01:25:09,044
Os pilotos britânicos me puseram
na rampa de bombas.

1586
01:25:09,045 --> 01:25:11,079
Me mostraram o oxigênio, sabem,

1587
01:25:11,080 --> 01:25:12,832
mas eu falhei.

1588
01:25:12,833 --> 01:25:15,783
Quando me largaram na Escócia,
eu estava inconsciente.

1589
01:25:15,784 --> 01:25:18,155
Mas fingi que estava cochilando.

1590
01:25:18,686 --> 01:25:20,536
Por favor, aproveitem sua festa.

1591
01:25:21,489 --> 01:25:22,790
É grande o suficiente?

1592
01:25:22,791 --> 01:25:24,092
Para acabar com a guerra?

1593
01:25:24,666 --> 01:25:27,029
Para acabar com todas as guerras.

1594
01:25:29,865 --> 01:25:33,936
Heisenberg me procurou
em Copenhague.

1595
01:25:34,502 --> 01:25:35,802
Foi assustador

1596
01:25:35,803 --> 01:25:38,253
ver meu ex-aluno
trabalhando para os nazistas.

1597
01:25:38,254 --> 01:25:41,709
Ele me contou algumas coisas
para me atrair.

1598
01:25:42,610 --> 01:25:45,948
Reações prolongadas
de fissão de urânio.

1599
01:25:45,949 --> 01:25:48,183
Soa mais como um reator
do que uma bomba.

1600
01:25:48,184 --> 01:25:49,684
Ele mencionou
a difusão gasosa?

1601
01:25:49,685 --> 01:25:52,415
Ele pareceu mais focado
na água pesada.

1602
01:25:52,416 --> 01:25:55,290
- Como moderador?
- Sim, no lugar do grafite.

1603
01:25:58,617 --> 01:26:01,796
- O que foi?
- É um caminho errado.

1604
01:26:02,419 --> 01:26:05,363
Estamos na frente.
E com você aqui para ajudar, Niels.

1605
01:26:05,364 --> 01:26:06,664
Desculpe, poderiam

1606
01:26:06,665 --> 01:26:08,950
nos deixar a sós um pouco,
senhores?

1607
01:26:15,643 --> 01:26:18,180
Eu não estou aqui
para ajudar, Robert.

1608
01:26:18,181 --> 01:26:20,381
Eu sabia que você poderia
fazer isso sem mim.

1609
01:26:20,382 --> 01:26:22,874
- Então, por que veio?
- Para falar do depois.

1610
01:26:22,875 --> 01:26:24,719
A força que você está
por revelar

1611
01:26:24,720 --> 01:26:28,022
viverá para sempre,
mais tempo que os nazistas.

1612
01:26:28,023 --> 01:26:29,623
E o mundo não está preparado.

1613
01:26:29,992 --> 01:26:32,162
Dá para levantar a pedra
sem estar preparado

1614
01:26:32,163 --> 01:26:33,728
para a cobra que irá aparecer.

1615
01:26:33,729 --> 01:26:35,529
Precisamos
que os políticos entendam,

1616
01:26:35,530 --> 01:26:37,265
esta não é uma nova arma.

1617
01:26:37,266 --> 01:26:38,766
É um novo mundo.

1618
01:26:38,767 --> 01:26:42,170
Eu estarei aí fora fazendo
o que eu puder, mas você...

1619
01:26:42,171 --> 01:26:44,988
você é um Prometeu Americano.

1620
01:26:44,989 --> 01:26:47,042
O homem que deu a eles
o poder

1621
01:26:47,043 --> 01:26:49,111
de destruírem a si próprios,

1622
01:26:49,112 --> 01:26:50,981
e eles respeitarão isso.

1623
01:26:50,982 --> 01:26:53,281
E seu trabalho
está mesmo começando.

1624
01:26:57,478 --> 01:27:00,055
Desculpe, Oppie,
mas tem uma chamada...

1625
01:27:01,846 --> 01:27:03,925
de San Francisco.

1626
01:27:10,198 --> 01:27:11,700
Robert!

1627
01:27:15,137 --> 01:27:16,670
Robert?

1628
01:27:17,339 --> 01:27:19,908
Robert. Robert.

1629
01:27:19,909 --> 01:27:22,144
Meu Deus, o que foi?

1630
01:27:22,145 --> 01:27:23,945
O que aconteceu?

1631
01:27:24,813 --> 01:27:26,447
O pai dela ligou.

1632
01:27:26,448 --> 01:27:28,548
Eles a encontraram ontem
na banheira.

1633
01:27:29,753 --> 01:27:31,053
Quem?

1634
01:27:32,054 --> 01:27:34,056
Ela tomou pílulas.

1635
01:27:34,057 --> 01:27:35,991
<i>Deixou um bilhete,
não assinado.</i>

1636
01:27:36,659 --> 01:27:37,959
Ela tomou barbitúricos,

1637
01:27:37,960 --> 01:27:40,110
mas havia hidrato de cloral
no sangue dela.

1638
01:27:43,498 --> 01:27:46,968
- Havia um bilhete.
- Jean Tatlock?

1639
01:27:53,525 --> 01:27:54,825
Nós estivemos juntos.

1640
01:27:55,279 --> 01:27:57,578
Ela falou que precisava de mim.
Eu...

1641
01:27:59,680 --> 01:28:02,616
Eu disse a ela que eu...
que eu não...

1642
01:28:02,617 --> 01:28:04,286
Eu disse a ela
que eu não podia...

1643
01:28:04,815 --> 01:28:06,465
Não, esse não era eu...

1644
01:28:08,990 --> 01:28:11,093
Não tem o direito
de cometer o pecado

1645
01:28:11,094 --> 01:28:12,928
e nos fazer ter pena de você

1646
01:28:12,929 --> 01:28:15,118
pois houve consequências.

1647
01:28:17,899 --> 01:28:20,102
Levante a cabeça!

1648
01:28:23,771 --> 01:28:26,071
Você sabe que as pessoas aqui
dependem de você.

1649
01:28:28,388 --> 01:28:30,988
Donald, poderia ajudar aqui?
Uma ajudinha, por favor.

1650
01:28:30,989 --> 01:28:33,239
- Isso é com você.
- Bob, não vou parar

1651
01:28:33,240 --> 01:28:34,740
porque o plutônio
é radioativo.

1652
01:28:34,741 --> 01:28:36,284
Nós só não sabemos
se faz mal

1653
01:28:36,285 --> 01:28:38,053
para o sistema reprodutivo
feminino.

1654
01:28:38,054 --> 01:28:40,454
Seu sistema reprodutivo
é mais exposto que o meu.

1655
01:28:40,455 --> 01:28:43,593
Por favor. O dispositivo
de implosão não sai do lugar.

1656
01:28:43,594 --> 01:28:45,294
Não apresse tudo.
Oppie, por favor.

1657
01:28:45,295 --> 01:28:47,728
Há pressa, não tem jeito,
então escolha algo.

1658
01:28:47,729 --> 01:28:49,763
Espere. Neddermeyer faz
o trabalho dele.

1659
01:28:49,764 --> 01:28:52,300
Teller não ajuda.
Ele não está ajudando.

1660
01:28:52,301 --> 01:28:55,251
Venho pedindo os cálculos
das lentes de implosão há semanas.

1661
01:28:55,252 --> 01:28:57,738
- Os britânicos fariam, Fuchs.
- Com certeza.

1662
01:28:57,739 --> 01:28:59,141
Esse trabalho é seu, Teller.

1663
01:28:59,142 --> 01:29:00,742
Eu fui contratado para pesquisa.

1664
01:29:00,743 --> 01:29:03,593
De uma bomba de hidrogênio
que sequer estamos construindo.

1665
01:29:11,746 --> 01:29:13,496
Não quero trabalhar
para este homem.

1666
01:29:14,923 --> 01:29:17,373
Deixe-o ir.
Ele é uma <i>prima donna</i>.

1667
01:29:17,374 --> 01:29:19,294
Concordo.
Ele devia sair de Los Alamos.

1668
01:29:19,295 --> 01:29:20,829
Muito bem.

1669
01:29:20,830 --> 01:29:22,630
Kisty, você substitui Neddermeyer.

1670
01:29:22,631 --> 01:29:24,166
Seth, você cuida do plutônio.

1671
01:29:24,167 --> 01:29:27,302
Lilli, você trabalha com Kisty,
pois ele precisa de você.

1672
01:29:27,303 --> 01:29:29,676
Fuchs, você fica
com a função do Teller.

1673
01:29:29,677 --> 01:29:32,307
Cuidará com exclusividade
do dispositivo de implosão.

1674
01:29:32,308 --> 01:29:36,111
E ninguém irá sair de Los Alamos.

1675
01:29:50,358 --> 01:29:52,327
- Não querem me deixar sair.
- Não.

1676
01:29:52,328 --> 01:29:53,962
Não vou deixar você sair.

1677
01:29:54,829 --> 01:29:57,933
Esqueça o Hans.
Esqueça a fissão.

1678
01:29:57,934 --> 01:30:01,102
Fique aqui,
pesquise o que quiser.

1679
01:30:01,103 --> 01:30:03,737
Fusão, a bomba de hidrogênio,
seja o que for.

1680
01:30:03,738 --> 01:30:06,638
- Nos vemos para conversar.
- Você não tem tempo para isso.

1681
01:30:06,639 --> 01:30:10,711
Agora você é um político, Robert.
Largou a física há vários anos.

1682
01:30:11,546 --> 01:30:13,348
Uma vez por semana.

1683
01:30:13,349 --> 01:30:15,250
Uma hora, você e eu.

1684
01:30:20,422 --> 01:30:22,991
Agora, levante
essa merda de baliza.

1685
01:30:26,928 --> 01:30:29,364
<i>Então, a "Super" estava
em desenvolvimento</i>

1686
01:30:29,365 --> 01:30:31,366
<i>sob sua supervisão
em Los Alamos?</i>

1687
01:30:31,710 --> 01:30:34,802
- Sim.
- E ainda assim, após a guerra,

1688
01:30:34,803 --> 01:30:36,438
tentou negar
que ela era viável.

1689
01:30:36,439 --> 01:30:39,389
Não, não. Eu apontei
as dificuldades técnicas com ela.

1690
01:30:39,390 --> 01:30:41,540
Não tentou acabar com ela
no encontro da AEC

1691
01:30:41,541 --> 01:30:43,341
- após o teste da bomba russa?
- Não.

1692
01:30:43,342 --> 01:30:45,633
Mas foi essa a recomendação
da AEC,

1693
01:30:45,634 --> 01:30:47,845
- não foi?
- Após horas de discussão

1694
01:30:47,846 --> 01:30:49,851
<i>sobre a melhor resposta.</i>

1695
01:30:49,852 --> 01:30:54,955
E a bomba H tem mil vezes
mais poder que uma bomba A.

1696
01:30:54,956 --> 01:30:56,156
MOSCOU

1697
01:30:56,157 --> 01:30:58,877
É só se os alvos forem
cidades grandes.

1698
01:30:58,878 --> 01:31:00,078
LENINGRADO

1699
01:31:00,079 --> 01:31:02,063
É uma arma
para genocídios em massa.

1700
01:31:02,064 --> 01:31:04,399
Izzy, desenhe círculos
neste lado do mapa

1701
01:31:04,400 --> 01:31:05,967
onde nós seríamos os alvos.

1702
01:31:05,968 --> 01:31:08,336
- Comece por Nova York e Washington.
- É justo.

1703
01:31:08,337 --> 01:31:10,939
É uma arma de ataque
sem poder defensivo.

1704
01:31:10,940 --> 01:31:12,507
- Dissuasão.
- "Dissuasão"?

1705
01:31:12,508 --> 01:31:14,158
Precisamos mesmo
de mais dissuasão

1706
01:31:14,159 --> 01:31:16,578
que nosso atual arsenal
de bombas atômicas?

1707
01:31:16,579 --> 01:31:19,314
Você se afoga com 3 metros de água
ou com 3 mil,

1708
01:31:19,315 --> 01:31:21,025
qual a diferença?

1709
01:31:21,026 --> 01:31:23,018
Já podemos afogar a Rússia
e eles sabem.

1710
01:31:23,019 --> 01:31:25,619
- E agora eles podem nos afogar.
- É só um aumento...

1711
01:31:36,231 --> 01:31:39,067
É como eu disse,
a concepção do Teller ainda é

1712
01:31:39,068 --> 01:31:41,421
tão impraticável quanto
durante a guerra.

1713
01:31:41,422 --> 01:31:44,039
Uma bomba H pode funcionar,
Oppie, você sabe que sim.

1714
01:31:44,040 --> 01:31:47,240
Não acredito que devamos empregar
todos os nossos recursos nisso.

1715
01:31:47,241 --> 01:31:50,045
Então como Truman tranquilizará
o povo americano?

1716
01:31:50,046 --> 01:31:52,712
Simplesmente limitando
a propagação de armas atômicas

1717
01:31:52,713 --> 01:31:55,617
através de um controle
internacional de energia nuclear.

1718
01:31:55,618 --> 01:31:57,218
Fala de um governo mundial?

1719
01:31:57,219 --> 01:32:00,188
As Nações Unidas, como concebido
por Roosevelt.

1720
01:32:00,189 --> 01:32:03,124
Bem, eu perguntei o que Truman
deveria fazer, não é?

1721
01:32:03,125 --> 01:32:06,032
O mundo está mudando,
não é o fascismo, mas o comunismo

1722
01:32:06,033 --> 01:32:07,833
que agora ameaça
nossa sobrevivência.

1723
01:32:07,834 --> 01:32:11,232
Lewis, você entende que se
nós construirmos uma bomba H,

1724
01:32:11,233 --> 01:32:14,135
os russos não terão escolha
a não ser construirem a deles?

1725
01:32:14,136 --> 01:32:15,937
Eles não já estariam
construindo uma?

1726
01:32:15,938 --> 01:32:18,584
Com base em informações
de um espião em Los Alamos…

1727
01:32:18,585 --> 01:32:20,485
- Não existia espião lá.
- Cavalheiros.

1728
01:32:20,486 --> 01:32:22,344
- Não?
- Vamos focar no assunto.

1729
01:32:22,345 --> 01:32:25,545
Vamos usar este momento
para obter concessões dos russos

1730
01:32:25,546 --> 01:32:28,867
com o compromisso de que
<i>NÃO</i> construiremos uma bomba H.

1731
01:32:28,868 --> 01:32:30,518
Revelando assim
a existência dela.

1732
01:32:30,519 --> 01:32:32,706
Você parece convencido
de que eles já sabem.

1733
01:32:32,707 --> 01:32:34,007
Muito bem.

1734
01:32:34,008 --> 01:32:36,656
Neste momento, eu gostaria
que os membros da comissão

1735
01:32:36,657 --> 01:32:40,061
se reunissem em privado para
finalizar nossas recomendações.

1736
01:32:41,303 --> 01:32:43,198
Não sei se quer
ir por esse caminho.

1737
01:32:43,199 --> 01:32:45,949
Lewis, com todo respeito,
nós somos o comitê consultivo

1738
01:32:45,950 --> 01:32:47,302
e daremos nosso parecer.

1739
01:32:47,303 --> 01:32:48,603
Boa noite.

1740
01:32:52,640 --> 01:32:56,175
Dr. Oppenheimer?
Olá, sou William Borden.

1741
01:32:56,529 --> 01:32:58,279
Comissão Adjunta
de Energia Atômica?

1742
01:32:58,280 --> 01:32:59,514
Ah, sim, sim.

1743
01:32:59,515 --> 01:33:01,182
Durante a guerra
eu era piloto.

1744
01:33:02,317 --> 01:33:05,053
Uma noite, voando de volta
de uma missão,

1745
01:33:05,054 --> 01:33:08,189
eu vi um incrível espetáculo,
tipo um meteoro.

1746
01:33:08,690 --> 01:33:11,249
<i>Um foguete V-2 indo
em direção à Inglaterra.</i>

1747
01:33:11,811 --> 01:33:13,995
Não paro de pensar
como seria

1748
01:33:13,996 --> 01:33:17,932
se um foguete inimigo daqueles
transportasse uma ogiva atômica.

1749
01:33:26,152 --> 01:33:28,052
Vamos nos assegurar
que não seremos nós

1750
01:33:28,053 --> 01:33:29,577
a tornar isso possível.

1751
01:33:36,084 --> 01:33:38,987
Oppie, não acho que você
deva ficar contra Strauss.

1752
01:33:38,988 --> 01:33:41,089
Se ambos falamos,
eles ouvirão a mim.

1753
01:33:41,090 --> 01:33:43,191
Quando você fala,
eles ouvem um profeta.

1754
01:33:43,192 --> 01:33:45,641
Quando Strauss fala,
eles ouvem eles mesmos.

1755
01:33:45,642 --> 01:33:47,028
Eles ouvirão um profeta.

1756
01:33:47,029 --> 01:33:50,331
Um profeta não pode errar.
Sequer uma vez.

1757
01:33:50,332 --> 01:33:52,133
<i>Você não acusou Oppenheimer</i>

1758
01:33:52,134 --> 01:33:54,168
<i>de sabotar o desenvolvimento
da "Super"?</i>

1759
01:33:54,169 --> 01:33:55,803
Jamais eu fui daqueles

1760
01:33:55,804 --> 01:33:59,007
a usar termos
como "sabotagem".

1761
01:33:59,008 --> 01:34:01,009
<i>Mas o Sr. Borden foi?</i>

1762
01:34:01,010 --> 01:34:02,310
É possível, eu presumo.

1763
01:34:02,311 --> 01:34:04,446
Como foi possível
o Sr. Borden reunir

1764
01:34:04,447 --> 01:34:05,997
uma acusação tão detalhada?

1765
01:34:05,998 --> 01:34:07,962
<i>Ele não era mais
empregado do governo,</i>

1766
01:34:07,963 --> 01:34:09,913
embora pareça que tinha
acesso ilimitado

1767
01:34:09,914 --> 01:34:11,519
aos arquivos
do Dr. Oppenheimer.

1768
01:34:11,520 --> 01:34:14,456
<i>O Sr. Nichols poderia ter dado
acesso aos arquivos?</i>

1769
01:34:14,457 --> 01:34:16,762
Ou outra pessoa, da AEC?

1770
01:34:16,763 --> 01:34:19,260
Essa é uma acusação
muito grave, Senador.

1771
01:34:19,261 --> 01:34:21,763
É sua intenção sugerir
que o Dr. Oppenheimer

1772
01:34:21,764 --> 01:34:23,731
é desleal aos Estados Unidos?

1773
01:34:24,171 --> 01:34:26,301
Eu sempre considerei,
e ainda considero,

1774
01:34:26,302 --> 01:34:29,037
que ele é leal
aos Estados Unidos.

1775
01:34:29,038 --> 01:34:30,738
Acredito nisso.
E continuarei assim

1776
01:34:30,739 --> 01:34:33,341
até ver uma prova muito conclusiva
do oposto.

1777
01:34:33,342 --> 01:34:35,097
<i>O senhor acredita
ou não acredita</i>

1778
01:34:35,098 --> 01:34:37,845
<i>que Dr. Oppenheimer seja
um risco à segurança?</i>

1779
01:34:39,337 --> 01:34:41,287
O IMPACTO DO DISPOSITIVO
NA CIVILIZAÇÃO.

1780
01:34:41,288 --> 01:34:43,238
EDIFÍCIO T-31 DOMINGO 11H
LOS ALAMOS

1781
01:34:46,392 --> 01:34:50,225
Quando Hitler estourou seus miolos
naquele <i>bunker</i>,

1782
01:34:50,226 --> 01:34:52,476
em minha humilde opinião
não havia necessidade

1783
01:34:52,477 --> 01:34:55,227
para aquela bomba ser vista
a não ser no local de teste.

1784
01:34:55,228 --> 01:34:57,131
Mas temos que ao menos
gastar um tempo

1785
01:34:57,132 --> 01:34:59,167
para avaliar o quanto
os fins

1786
01:34:59,168 --> 01:35:01,469
ainda justificam os meios,
porque...

1787
01:35:03,805 --> 01:35:06,374
A Alemanha está para se render.

1788
01:35:08,276 --> 01:35:11,613
Esse não é mais o inimigo
que foi a maior ameaça

1789
01:35:11,614 --> 01:35:13,814
para a raça humana,
agora é o nosso trabalho.

1790
01:35:15,851 --> 01:35:18,586
Hitler morreu, é verdade.

1791
01:35:20,288 --> 01:35:21,824
Mas os japoneses continuam.

1792
01:35:21,825 --> 01:35:24,125
A derrota deles
parece assegurada.

1793
01:35:24,126 --> 01:35:26,561
Não se você é um soldado
preparado para invadir.

1794
01:35:27,463 --> 01:35:29,163
Nós podemos acabar
com essa guerra.

1795
01:35:29,164 --> 01:35:32,500
Mas como justificaremos
o uso desta arma em seres humanos?

1796
01:35:35,917 --> 01:35:38,640
Nós somos teóricos, não é?

1797
01:35:38,641 --> 01:35:40,275
Sim. Claro.

1798
01:35:40,276 --> 01:35:44,545
Imaginamos o futuro
e as imagens nos assustam.

1799
01:35:45,413 --> 01:35:47,549
Mas eles não temem
até entenderem,

1800
01:35:47,550 --> 01:35:50,485
e não entenderão
enquanto não usarem.

1801
01:35:50,486 --> 01:35:54,222
Quando o mundo souber
do terrível segredo de Los Alamos,

1802
01:35:54,223 --> 01:35:58,144
nosso trabalho aqui assegurará
uma paz nunca vista pelos humanos.

1803
01:35:58,145 --> 01:36:01,095
Uma paz baseada num tipo
de cooperação internacional

1804
01:36:01,096 --> 01:36:03,663
que Roosevelt sempre pretendeu.

1805
01:36:08,204 --> 01:36:09,504
<i>Algum progresso?</i>

1806
01:36:09,505 --> 01:36:12,307
Dois anos e um bilhão de dólares
são válidos?

1807
01:36:12,308 --> 01:36:14,108
Bem, é difícil avaliar.

1808
01:36:14,109 --> 01:36:15,710
Na verdade, não,
pois só aumenta.

1809
01:36:15,711 --> 01:36:17,445
"Parto rural grátis."

1810
01:36:17,446 --> 01:36:20,248
Oitenta bebês nascidos
no primeiro ano.

1811
01:36:20,249 --> 01:36:22,617
Este ano, temos 10 por mês.

1812
01:36:22,618 --> 01:36:25,386
Controle de natalidade
não é minha jurisdição, General.

1813
01:36:26,254 --> 01:36:28,590
- Claramente.
- General.

1814
01:36:33,497 --> 01:36:34,897
Abaixem a cabeça,
todo mundo.

1815
01:36:34,898 --> 01:36:37,098
Fuchs, abaixe a cabeça.

1816
01:36:43,638 --> 01:36:45,373
É isso.

1817
01:36:45,374 --> 01:36:48,309
Duas bombas viáveis.
Preciso de uma data.

1818
01:36:50,612 --> 01:36:53,481
- Setembro.
- Julho.

1819
01:36:53,482 --> 01:36:55,450
Este é o ponto certo,
cavalheiros.

1820
01:36:56,110 --> 01:36:57,652
Agosto.

1821
01:36:57,653 --> 01:36:58,953
Julho.

1822
01:36:59,421 --> 01:37:01,338
Teste em julho.

1823
01:37:01,339 --> 01:37:02,925
Mas preciso do meu irmão.

1824
01:37:07,109 --> 01:37:09,477
Frank conhece o deserto,
abandonou a política,

1825
01:37:09,478 --> 01:37:11,699
e trabalha com Lawrence
há dois anos.

1826
01:37:18,673 --> 01:37:20,508
Como vamos chamar o teste?

1827
01:37:21,609 --> 01:37:25,380
"Bata em meu coração,
trindade de Deus."

1828
01:37:25,381 --> 01:37:26,681
O quê?

1829
01:37:27,883 --> 01:37:29,283
Trindade.

1830
01:37:36,959 --> 01:37:39,670
Você insistiu em levar Frank,
o seu irmão,

1831
01:37:39,671 --> 01:37:41,721
- um notório comunista…
- Ex-comunista.

1832
01:37:42,267 --> 01:37:44,067
Você levou um notório ex-comunista

1833
01:37:44,619 --> 01:37:47,992
para o mais secreto e importante
projeto de defesa dos EUA.

1834
01:37:47,993 --> 01:37:50,805
Eu sabia que meu irmão
era confiável, inteiramente.

1835
01:37:51,319 --> 01:37:54,676
E como sentiu a repercussão
de sua decisão na equipe?

1836
01:37:55,512 --> 01:37:56,812
Fuchs, abaixe a cabeça.

1837
01:37:56,813 --> 01:37:58,579
Todo mundo preparado?

1838
01:38:08,059 --> 01:38:09,724
Espero que tenham
aprendido algo.

1839
01:38:09,725 --> 01:38:11,725
É, que é preciso
ficarmos bem mais longe.

1840
01:38:11,726 --> 01:38:13,261
Resolva isso. Rápido.

1841
01:38:13,262 --> 01:38:14,963
Iremos para Washington
esta manhã.

1842
01:38:14,964 --> 01:38:16,612
Temos que dar a eles
uma data.

1843
01:38:31,345 --> 01:38:33,628
É um longo caminho
de Chicago aqui, Leo.

1844
01:38:33,629 --> 01:38:36,539
Se não agirmos agora,
eles a usarão contra o Japão.

1845
01:38:36,540 --> 01:38:39,587
Agendamos uma reunião com Truman,
mas alguém cancelou.

1846
01:38:39,888 --> 01:38:42,186
Você se reunirá
com o Secretário da Guerra.

1847
01:38:42,187 --> 01:38:46,083
Construir não significa
que poderemos decidir como usá-la.

1848
01:38:46,532 --> 01:38:48,529
A História nos julgará, Robert.

1849
01:38:49,555 --> 01:38:51,867
Em Chicago, preparamos
uma petição.

1850
01:38:51,868 --> 01:38:53,836
Eu não...
Não entrarei nessa.

1851
01:38:58,920 --> 01:39:01,020
Só me conte suas questões
que eu transmito.

1852
01:39:01,021 --> 01:39:03,979
Minhas questões?
Os alemães perderam.

1853
01:39:03,980 --> 01:39:05,780
Os japoneses não resistirão
sozinhos.

1854
01:39:05,781 --> 01:39:07,782
Como pode saber?
Você nos levou a isto.

1855
01:39:07,783 --> 01:39:09,883
Você e Einstein, com a carta
para Roosevelt

1856
01:39:09,884 --> 01:39:11,784
dizendo que podíamos construir
a bomba.

1857
01:39:11,785 --> 01:39:15,327
- Contra os alemães.
- Fazer armas dá nisso, Szilard.

1858
01:39:15,328 --> 01:39:17,685
- Oppie, você precisa ajudar.
- Fermi vem.

1859
01:39:17,686 --> 01:39:19,636
- Lawrence também.
- Eles não são você.

1860
01:39:19,637 --> 01:39:21,629
Você é o grande vendedor
da ciência.

1861
01:39:21,630 --> 01:39:24,265
Consegue convencer qualquer um
de qualquer coisa.

1862
01:39:24,967 --> 01:39:26,367
Até você mesmo.

1863
01:39:26,969 --> 01:39:28,369
Com licença.

1864
01:39:29,403 --> 01:39:32,673
O bombardeio em Tóquio
matou 100 mil pessoas.

1865
01:39:32,674 --> 01:39:34,509
Civis na maioria.

1866
01:39:35,198 --> 01:39:37,546
Me preocupa uma América
onde fazemos isso

1867
01:39:37,547 --> 01:39:38,847
e ninguém protesta.

1868
01:39:38,848 --> 01:39:41,917
Pearl Harbor e 3 anos
de conflito brutal no Pacífico

1869
01:39:41,918 --> 01:39:44,668
nos deram muita margem de manobra
com o povo americano.

1870
01:39:44,669 --> 01:39:46,962
O suficiente para lançar
uma bomba atômica?

1871
01:39:46,963 --> 01:39:48,930
A bomba A pode não causar
tantos danos

1872
01:39:48,931 --> 01:39:50,692
quanto o bombardeio
de Tóquio.

1873
01:39:50,693 --> 01:39:54,662
- De quanto é a estimativa?
- Em uma cidade média,

1874
01:39:54,663 --> 01:39:57,072
20 ou 30 mil mortes.

1875
01:39:57,073 --> 01:40:01,003
É, mas não subestime o impacto
psicológico de uma...

1876
01:40:01,004 --> 01:40:02,743
de uma explosão atômica.

1877
01:40:02,744 --> 01:40:06,707
Uma coluna de fogo
de 3 mil metros.

1878
01:40:06,708 --> 01:40:10,078
Efeitos mortais de nêutrons
por 2 km, em todas a direções,

1879
01:40:10,079 --> 01:40:13,015
usando só uma bomba.

1880
01:40:13,016 --> 01:40:15,383
Lançada por um B-29
bem dissimulado,

1881
01:40:15,384 --> 01:40:17,685
a bomba atômica será

1882
01:40:17,686 --> 01:40:20,555
uma revelação terrível
do poder divino.

1883
01:40:21,303 --> 01:40:23,859
Se isso for verdade,
será definitivo.

1884
01:40:23,860 --> 01:40:25,961
A 2ª Guerra Mundial
irá acabar.

1885
01:40:25,962 --> 01:40:27,695
Nossos rapazes
voltariam para casa.

1886
01:40:27,696 --> 01:40:28,996
Alvos militares?

1887
01:40:29,998 --> 01:40:32,193
Não há nenhum
grande o suficiente.

1888
01:40:32,668 --> 01:40:35,353
Talvez uma fábrica bélica vital

1889
01:40:35,354 --> 01:40:38,472
com trabalhadores
morando no entorno.

1890
01:40:38,473 --> 01:40:40,873
E emitimos um alerta
para reduzir baixas civis.

1891
01:40:40,874 --> 01:40:43,215
Eles mandariam tudo o que têm
contra nós,

1892
01:40:43,216 --> 01:40:44,679
e eu estaria naquele avião.

1893
01:40:44,680 --> 01:40:47,916
Mas se avisamos
e a explosão falhar,

1894
01:40:47,917 --> 01:40:50,918
destruiríamos qualquer chance
do Japão se render.

1895
01:40:50,919 --> 01:40:54,007
Existe algum modo
de demonstrar a bomba ao Japão

1896
01:40:54,008 --> 01:40:55,523
para provocar a rendição?

1897
01:40:55,524 --> 01:40:58,626
Nós pretendemos demonstrar
de modo o menos ambíguo possível.

1898
01:40:58,627 --> 01:40:59,927
Duas vezes.

1899
01:40:59,928 --> 01:41:01,909
Uma para mostrar
o poderio da arma

1900
01:41:01,910 --> 01:41:04,160
e a segunda para mostrar
que podemos continuar

1901
01:41:04,161 --> 01:41:05,533
até que eles se rendam.

1902
01:41:05,534 --> 01:41:08,937
Nós temos uma lista de 12 cidades
para escolher uma...

1903
01:41:08,938 --> 01:41:10,873
Desculpe, 11.

1904
01:41:10,874 --> 01:41:12,808
Eu tirei Kyoto da lista

1905
01:41:12,809 --> 01:41:16,444
devido a sua relevância cultural
para o povo japonês.

1906
01:41:16,445 --> 01:41:19,345
Além disso, minha esposa e eu
passamos lá nossa lua de mel.

1907
01:41:19,346 --> 01:41:20,648
É uma cidade magnífica.

1908
01:41:24,095 --> 01:41:26,279
Me deixem simplificar isto
para vocês.

1909
01:41:26,280 --> 01:41:28,656
De acordo com meu serviço secreto,
confidencial,

1910
01:41:28,657 --> 01:41:30,926
o povo japonês
não irá se render,

1911
01:41:30,927 --> 01:41:32,727
sob nenhuma circunstância,

1912
01:41:32,728 --> 01:41:36,164
a menos que haja uma invasão
bem-sucedida e total do país.

1913
01:41:36,542 --> 01:41:39,167
Muitas vidas serão perdidas,
americanas e japonesas.

1914
01:41:39,635 --> 01:41:41,985
O uso da bomba atômica
sobre cidades japonesas

1915
01:41:41,986 --> 01:41:43,437
salvará vidas.

1916
01:41:43,438 --> 01:41:45,773
Se mantivermos vantagem moral.

1917
01:41:46,342 --> 01:41:48,162
- Como assim?
- Se usarmos esta arma

1918
01:41:48,163 --> 01:41:50,863
sem informar nossos aliados,
ela será vista como ameaça

1919
01:41:50,864 --> 01:41:52,564
e teremos
uma corrida armamentista.

1920
01:41:52,565 --> 01:41:54,515
Até que ponto os soviéticos
podem saber?

1921
01:41:54,516 --> 01:41:56,425
Segredos não reterão
os soviéticos

1922
01:41:56,426 --> 01:41:58,623
de fazer parte
do mundo atômico.

1923
01:41:58,624 --> 01:42:00,718
Nos disseram que eles
não tem urânio.

1924
01:42:00,719 --> 01:42:02,019
Você está mal informado.

1925
01:42:02,020 --> 01:42:03,848
A bomba russa
é questão de tempo.

1926
01:42:03,849 --> 01:42:07,095
O programa precisa continuar
com força total após a guerra.

1927
01:42:07,864 --> 01:42:09,730
Secretário Stimson,
posso...

1928
01:42:09,731 --> 01:42:13,920
Nem todos os cientistas do projeto
concordam.

1929
01:42:13,921 --> 01:42:16,671
Talvez seja a hora
de considerarmos outras opiniões.

1930
01:42:16,672 --> 01:42:19,160
- Se falar com um cientista…
- O Projeto Manhattan

1931
01:42:19,161 --> 01:42:20,715
foi atacado desde o início

1932
01:42:20,716 --> 01:42:23,845
por certos cientistas
de discrição duvidosa

1933
01:42:23,846 --> 01:42:25,546
e lealdade incerta.

1934
01:42:25,547 --> 01:42:27,647
Um deles acabou de tentar
ver o presidente.

1935
01:42:27,648 --> 01:42:30,654
Nós precisamos desses homens,
mas assim que for possível

1936
01:42:30,655 --> 01:42:33,055
devemos cortar
tais cientistas do programa.

1937
01:42:33,056 --> 01:42:34,555
Não concorda, doutor?

1938
01:42:35,690 --> 01:42:37,891
Se a bomba russa é inevitável,

1939
01:42:37,892 --> 01:42:39,239
talvez devêssemos convidar

1940
01:42:39,240 --> 01:42:41,406
cientistas de ponta
para a "Trindade".

1941
01:42:41,407 --> 01:42:43,318
O Presidente Truman não tem
a intenção

1942
01:42:43,319 --> 01:42:44,765
de aumentar as expectativas

1943
01:42:44,766 --> 01:42:47,601
de Stalin ser incluído
no projeto atômico.

1944
01:42:47,602 --> 01:42:50,402
Informá-lo de nosso avanço
e apresentar isso como um meio

1945
01:42:50,403 --> 01:42:53,803
de vencer a guerra necessita evitar
promessas impossíveis de manter.

1946
01:42:53,804 --> 01:42:55,954
Mas a Conferência de Paz
de Potsdam em julho

1947
01:42:55,955 --> 01:42:57,304
dará ao Presidente Truman

1948
01:42:57,305 --> 01:42:59,247
a última chance
de ter essa conversa.

1949
01:42:59,248 --> 01:43:01,598
Consegue nos entregar a bomba
nesse prazo?

1950
01:43:02,150 --> 01:43:05,887
Com certeza.
O teste será antes da conferência.

1951
01:43:10,624 --> 01:43:13,161
Postos de observação
da zona de impacto

1952
01:43:13,162 --> 01:43:16,865
a 10 km ao norte,
ao sul e a oeste.

1953
01:43:16,866 --> 01:43:20,202
- Onde será a detonação?
- 10 km ao sul.

1954
01:43:20,203 --> 01:43:23,571
E o campo base fica
a 16 km ao sul, aqui.

1955
01:43:23,572 --> 01:43:26,540
E há mais um
posto de observação

1956
01:43:26,541 --> 01:43:28,743
naquele morro, a 32 km.

1957
01:43:28,744 --> 01:43:31,746
O que é aquilo, Frank?
Linhas de controle já traçadas?

1958
01:43:31,747 --> 01:43:35,575
A Força Aérea requisitou
uma linha de luzes para os B-29.

1959
01:43:35,576 --> 01:43:37,643
Quais B-29?
Nossa bomba está na torre.

1960
01:43:37,644 --> 01:43:39,544
Eles querem usar o teste
para confirmar

1961
01:43:39,545 --> 01:43:41,195
uma distância
de operação segura.

1962
01:43:41,196 --> 01:43:43,596
- É arriscado.
- Não tanto quanto lançar no Japão

1963
01:43:43,597 --> 01:43:46,247
pretendendo estarmos certos
do raio de destruição.

1964
01:43:46,248 --> 01:43:48,648
Não os deixe nos atrasarem,
a detonação é dia 15.

1965
01:43:48,649 --> 01:43:51,263
- Dia 15? Não era...
- Dia 15!

1966
01:43:51,730 --> 01:43:53,316
Dia 15.

1967
01:43:53,317 --> 01:43:54,634
ZERO
SUL

1968
01:43:54,635 --> 01:43:57,044
Eu ficarei aqui
no Ponto de Observação Sul

1969
01:43:57,045 --> 01:43:58,807
<i>com Frank e Kistiakowsky.</i>

1970
01:43:58,808 --> 01:44:01,343
Vocês todos estão
designados para o Campo Base

1971
01:44:01,344 --> 01:44:04,578
e para o Observação Oeste,
ou Observação Distante.

1972
01:44:15,302 --> 01:44:16,602
Cuidado com a faca.

1973
01:44:16,603 --> 01:44:18,592
Aí, cuidado.

1974
01:44:19,693 --> 01:44:21,229
Essas distâncias são seguras?

1975
01:44:21,810 --> 01:44:23,764
São baseadas nos seus cálculos.

1976
01:44:23,765 --> 01:44:26,700
É hora de acreditar
na sua ciência, Hans. Literalmente.

1977
01:44:50,125 --> 01:44:51,442
Isso.

1978
01:44:56,264 --> 01:44:59,367
- E quanto à nuvem radioativa?
- Sem ventos fortes,

1979
01:44:59,368 --> 01:45:01,018
se assentará num raio
de 3 a 4 km.

1980
01:45:01,019 --> 01:45:03,354
As medidas de evacuação
estão prontas.

1981
01:45:03,355 --> 01:45:05,705
Mas precisamos de tempo bom
para a visibilidade,

1982
01:45:05,706 --> 01:45:07,206
então, tem de estar bom.

1983
01:45:08,255 --> 01:45:09,555
Saiam todos.

1984
01:45:19,586 --> 01:45:21,247
Será na noite do dia 15.

1985
01:45:21,248 --> 01:45:25,046
É definitivo, então.
Se têm algo a dizer, digam agora.

1986
01:45:26,722 --> 01:45:29,663
Isso, pare, pare.
Tragam os colchões.

1987
01:45:29,664 --> 01:45:31,765
Coloquem os colchões
por baixo.

1988
01:45:48,749 --> 01:45:51,652
Seria bom fazer
um teste final de implosão.

1989
01:45:53,396 --> 01:45:55,857
- Não faria mal.
- Façam.

1990
01:45:56,825 --> 01:45:59,127
Tem algo mais
que possa nos impedir?

1991
01:46:33,785 --> 01:46:35,548
Está acontecendo, não é?

1992
01:46:37,660 --> 01:46:39,000
Mandarei uma mensagem.

1993
01:46:39,868 --> 01:46:41,816
Se vier em nossa direção,

1994
01:46:42,879 --> 01:46:44,179
recolha os lençóis.

1995
01:46:47,877 --> 01:46:49,177
Robert?

1996
01:46:51,846 --> 01:46:53,281
Boa sorte.

1997
01:47:59,848 --> 01:48:02,984
Oppie leva modestos
três quilotons.

1998
01:48:02,985 --> 01:48:05,387
- Teller leva 45.
- 20.

1999
01:48:05,388 --> 01:48:07,856
20 mil toneladas de TNT,

2000
01:48:07,857 --> 01:48:12,060
e alguém quer o efeito lateral
de ignição da atmosfera?

2001
01:48:13,680 --> 01:48:15,564
Está dizendo que haverá
um atraso?

2002
01:48:15,565 --> 01:48:17,174
Estou dizendo
que seria prudente.

2003
01:48:17,175 --> 01:48:18,675
Esse mau tempo
chegou ao local?

2004
01:48:23,949 --> 01:48:26,499
Bethe ligou e avisou
que o teste de implosão falhou.

2005
01:48:26,500 --> 01:48:27,909
Alô, Hans.

2006
01:48:27,910 --> 01:48:29,344
Sim, ele está aqui.

2007
01:48:30,178 --> 01:48:31,513
Sim.

2008
01:48:33,783 --> 01:48:35,481
- Ele está errado?
- Não.

2009
01:48:35,482 --> 01:48:37,218
- Não?
- Não.

2010
01:48:37,953 --> 01:48:39,821
Quer dizer que a bomba vai falhar?

2011
01:48:40,255 --> 01:48:41,727
- Não.
- Explique.

2012
01:48:41,728 --> 01:48:43,933
Não consigo.
Eu só sei

2013
01:48:43,934 --> 01:48:45,984
que as lentes
de implosão funcionarão.

2014
01:48:45,985 --> 01:48:48,835
Ao dispararmos os detonadores,
se não iniciarem uma reação

2015
01:48:48,836 --> 01:48:51,849
2 anos de plutônio
serão espalhados em White Sands.

2016
01:48:51,850 --> 01:48:55,686
Aposto um mês do meu salário contra
10 dólares que iniciarão a reação.

2017
01:48:55,687 --> 01:48:56,987
Jesus!

2018
01:49:03,897 --> 01:49:07,115
Vento piorando no Ponto Zero,
chuva não. Muitos relâmpagos.

2019
01:49:07,116 --> 01:49:08,766
Não seria hora
de avisar seu homem

2020
01:49:08,767 --> 01:49:11,519
para ficar longe da torre de aço
com a bomba atômica?

2021
01:49:15,116 --> 01:49:16,624
Vamos para o Observação Sul.

2022
01:49:16,625 --> 01:49:17,725
Tirem os homens.

2023
01:49:17,726 --> 01:49:19,576
Podemos fazer
nossas determinações lá.

2024
01:49:24,966 --> 01:49:26,968
A equipe não dormiu
por duas noites.

2025
01:49:26,969 --> 01:49:29,003
Se abortarmos, por segurança,

2026
01:49:29,004 --> 01:49:30,572
serão semanas para retomar.

2027
01:49:30,573 --> 01:49:32,073
E perderemos Postdam.

2028
01:49:32,074 --> 01:49:35,276
Preciso informar o Truman às 7h.
O prazo está acabando.

2029
01:49:35,277 --> 01:49:37,912
- E esse clima?
- Chuva, vento, raios.

2030
01:49:37,913 --> 01:49:39,981
- Por quanto tempo, droga?
- Está forte.

2031
01:49:39,982 --> 01:49:41,516
Vai limpar antes de amanhecer.

2032
01:49:41,517 --> 01:49:43,567
- Como pode saber.
- Conheço este deserto.

2033
01:49:43,568 --> 01:49:45,987
Tempestade à noite.
Ao amanhecer, ela para.

2034
01:49:45,988 --> 01:49:48,785
Pode ser, mas marque
o mais tarde possível.

2035
01:49:48,786 --> 01:49:50,086
5h30!

2036
01:49:50,087 --> 01:49:51,389
Assine sua previsão.

2037
01:49:51,390 --> 01:49:54,440
- Se estiver errado, enforco você.
- Frank, diga a eles, 5h30.

2038
01:49:54,441 --> 01:49:56,164
- 5h30, 5h30.
- 5h30.

2039
01:49:58,366 --> 01:50:03,304
3 anos, 4 mil pessoas,
2 bilhões de dólares.

2040
01:50:03,305 --> 01:50:05,707
Se isso falhar...

2041
01:50:05,708 --> 01:50:07,342
estamos acabados.

2042
01:50:10,111 --> 01:50:12,080
Eu aposto em 3 quilotons.

2043
01:50:12,753 --> 01:50:15,336
Com menos,
eles não saberão o que é.

2044
01:50:15,681 --> 01:50:19,287
O que Fermi quis dizer
com "ignição da atmosfera"?

2045
01:50:19,288 --> 01:50:20,638
Houve uma época
onde pareceu

2046
01:50:20,639 --> 01:50:21,994
que a reação em cadeia

2047
01:50:21,995 --> 01:50:24,459
de um dispositivo atômico
nunca pararia.

2048
01:50:25,693 --> 01:50:27,729
Colocando fogo na atmosfera.

2049
01:50:27,730 --> 01:50:30,114
Por que Fermi ainda
aposta nisso?

2050
01:50:30,115 --> 01:50:32,934
Chame isso de humor negro.

2051
01:50:35,270 --> 01:50:38,222
Espere, existe uma chance

2052
01:50:38,223 --> 01:50:39,974
de quando apertarmos
aquele botão,

2053
01:50:39,975 --> 01:50:41,492
destruirmos o mundo?

2054
01:50:41,493 --> 01:50:43,404
Nada em nossa pesquisa
de 3 anos

2055
01:50:43,405 --> 01:50:45,213
dá suporte a essa conclusão.

2056
01:50:45,214 --> 01:50:48,216
A não ser como
a mais remota possibilidade.

2057
01:50:48,565 --> 01:50:49,865
Remota quanto?

2058
01:50:49,866 --> 01:50:51,432
Possibilidade próxima
de zero.

2059
01:50:52,554 --> 01:50:53,955
Perto de zero?

2060
01:50:54,722 --> 01:50:56,910
O que esperava
de uma simples teoria?

2061
01:50:58,793 --> 01:51:01,162
Zero seria bom.

2062
01:51:04,466 --> 01:51:06,100
Daqui a exatamente

2063
01:51:06,101 --> 01:51:09,437
uma hora e 58 minutos,

2064
01:51:09,438 --> 01:51:11,005
nós saberemos.

2065
01:51:16,946 --> 01:51:18,246
Está acalmando.

2066
01:51:30,795 --> 01:51:33,495
O grupo de armamento saiu
do Ponto Zero e vêm para cá.

2067
01:51:33,496 --> 01:51:35,830
- Acionem os interruptores.
- Liguem os carros.

2068
01:51:35,831 --> 01:51:38,132
Preparar para evacuação
de emergência.

2069
01:51:55,758 --> 01:51:57,084
Óculos de soldagem.

2070
01:51:57,085 --> 01:51:59,124
Todos em seus lugares.

2071
01:51:59,125 --> 01:52:01,395
Peguem os óculos de soldagem.

2072
01:52:02,798 --> 01:52:04,838
Peguem os óculos de soldagem.

2073
01:52:56,018 --> 01:52:57,558
Vinte minutos.

2074
01:53:01,348 --> 01:53:02,974
Vinte minutos.

2075
01:53:13,818 --> 01:53:15,351
Faltam vinte.

2076
01:53:18,588 --> 01:53:20,006
Na perna, por favor.

2077
01:53:21,270 --> 01:53:23,517
- Feyman.
- Não.

2078
01:53:23,518 --> 01:53:26,035
Os óculos.
Para bloquear os raios UV.

2079
01:53:26,036 --> 01:53:28,030
E o que bloqueia os óculos?

2080
01:53:29,237 --> 01:53:31,746
Vou para o Campo Base.
Boa sorte.

2081
01:53:32,680 --> 01:53:33,993
Robert...

2082
01:53:35,083 --> 01:53:36,851
tente não explodir o mundo.

2083
01:53:48,447 --> 01:53:51,353
Cuidado com essa agulha.
Se os detonadores não carregarem,

2084
01:53:51,354 --> 01:53:53,256
ou se a tensão cair
abaixo de um volt,

2085
01:53:53,257 --> 01:53:55,081
você aperta esse botão,
e aborta.

2086
01:53:55,082 --> 01:53:57,615
- Entendido?
- Entendido.

2087
01:54:05,180 --> 01:54:07,432
<i>Dois minutos para a detonação.</i>

2088
01:54:07,433 --> 01:54:09,543
Todo mundo, abaixem-se.

2089
01:54:09,544 --> 01:54:12,832
Não se virem até haver luz
refletida nas colinas.

2090
01:54:13,595 --> 01:54:16,444
Então, assistam a explosão
somente através dos óculos.

2091
01:54:16,445 --> 01:54:19,393
<i>Noventa segundos
para a detonação.</i>

2092
01:54:20,833 --> 01:54:23,563
<i>Noventa segundos
para a detonação.</i>

2093
01:54:24,057 --> 01:54:26,063
Está bem espalhado?

2094
01:54:26,064 --> 01:54:27,364
Sim.

2095
01:54:33,763 --> 01:54:36,844
<i>Sessenta segundos
para a detonação.</i>

2096
01:54:51,453 --> 01:54:53,762
Essas coisas são duras
para o coração.

2097
01:54:53,763 --> 01:54:55,496
<i>Trinta segundos.</i>

2098
01:55:00,571 --> 01:55:02,312
Detonadores carregados.

2099
01:55:12,130 --> 01:55:16,415
<i>Dezessete, dezesseis, quinze,</i>

2100
01:55:16,823 --> 01:55:20,073
<i>quatorze, treze,</i>

2101
01:55:20,405 --> 01:55:22,839
<i>doze, onze,</i>

2102
01:55:23,938 --> 01:55:26,744
<i>dez, nove,</i>

2103
01:55:27,965 --> 01:55:30,992
<i>oito, sete,</i>

2104
01:55:32,833 --> 01:55:34,201
<i>seis...</i>

2105
01:55:35,585 --> 01:55:36,885
<i>cinco...</i>

2106
01:55:38,338 --> 01:55:39,791
<i>quatro...</i>

2107
01:55:40,870 --> 01:55:42,343
<i>três...</i>

2108
01:55:43,277 --> 01:55:44,603
<i>dois...</i>

2109
01:55:45,909 --> 01:55:47,222
<i>um.</i>

2110
01:57:19,867 --> 01:57:22,710
<i>"E agora,
eu me tornei a Morte.</i>

2111
01:57:24,612 --> 01:57:26,578
<i>O destruidor de mundos."</i>

2112
01:57:59,714 --> 01:58:01,149
Funcionou.

2113
01:58:36,254 --> 01:58:38,084
Você me deve 10 dólares!

2114
01:58:40,556 --> 01:58:42,091
- Vamos!
- Espere.

2115
01:58:42,092 --> 01:58:44,230
Eu cumpro o que digo, Kisty.

2116
01:58:44,231 --> 01:58:45,619
Você cumpre!

2117
01:58:46,266 --> 01:58:47,999
Você cumpre, sim.

2118
01:59:12,548 --> 01:59:13,908
Bom trabalho.

2119
01:59:16,024 --> 01:59:18,357
Conseguimos! Conseguimos!

2120
01:59:18,358 --> 01:59:19,678
Bom trabalho.

2121
01:59:24,905 --> 01:59:27,285
- Liguem para Potsdam, agora.
- Sim, senhor.

2122
01:59:38,022 --> 01:59:40,941
- Mande uma mensagem para Kitty.
- Não podemos falar nada!

2123
01:59:40,942 --> 01:59:42,929
Diga a ela
para recolher os lençóis.

2124
01:59:50,789 --> 01:59:52,327
Conseguimos, pessoal!

2125
01:59:57,877 --> 02:00:00,041
- Alô?
<i>- Alô, Kitty?</i>

2126
02:00:00,042 --> 02:00:03,033
O que, Charlotte?
Pode falar.

2127
02:00:03,034 --> 02:00:07,342
<i>Não sei direito, ele só disse
para você "recolher os lençóis".</i>

2128
02:00:10,218 --> 02:00:11,582
<i>Kitty?</i>

2129
02:00:12,880 --> 02:00:15,416
<i>Kitty? Você ainda está aí?</i>

2130
02:00:22,476 --> 02:00:24,307
<i>Se eles detonarem
muito alto no ar,</i>

2131
02:00:24,308 --> 02:00:26,012
a explosão
não será tão poderosa.

2132
02:00:26,013 --> 02:00:28,083
Com todo o respeito,
Dr. Oppenheimer,

2133
02:00:28,084 --> 02:00:29,794
assumiremos a partir daqui.

2134
02:00:40,136 --> 02:00:42,645
Truman informou Stalin
em Potsdam?

2135
02:00:43,082 --> 02:00:46,415
"Informar" seria um exagero.
Ele...

2136
02:00:46,416 --> 02:00:49,506
mencionou
uma nova arma poderosa.

2137
02:00:49,986 --> 02:00:54,796
Stalin espera
que nós usemos contra o Japão.

2138
02:00:56,149 --> 02:00:57,697
É isso?

2139
02:00:57,698 --> 02:01:01,282
Robert, demos a eles um Ás,
cabe a eles usar a mão.

2140
02:01:03,281 --> 02:01:05,400
Você está planejando
para o dia 6?

2141
02:01:05,401 --> 02:01:07,952
Cabe ao Comandante do Pacífico.

2142
02:01:09,170 --> 02:01:11,066
Devo ir com você
para Washington?

2143
02:01:12,639 --> 02:01:13,943
Para quê?

2144
02:01:16,212 --> 02:01:18,072
Me mantenha informado.

2145
02:01:19,246 --> 02:01:20,553
Claro.

2146
02:01:22,403 --> 02:01:23,876
Na medida do possível.

2147
02:01:41,451 --> 02:01:44,611
Os japoneses se renderiam
se soubessem o que está por vir?

2148
02:01:45,607 --> 02:01:46,918
Não sei.

2149
02:01:49,579 --> 02:01:51,671
Você viu
a petição de Szilard?

2150
02:01:51,672 --> 02:01:54,450
Que diabos Szilard sabe
sobre os japoneses?

2151
02:01:54,451 --> 02:01:56,210
Você não vai assinar, vai?

2152
02:01:56,563 --> 02:01:59,082
Muita gente assinou.
Muita gente.

2153
02:01:59,083 --> 02:02:00,386
Edward.

2154
02:02:01,489 --> 02:02:03,160
Termos construído esta bomba

2155
02:02:03,161 --> 02:02:06,226
não nos dá mais direitos
ou responsabilidades

2156
02:02:06,227 --> 02:02:08,631
para decidir
como ela será usada.

2157
02:02:08,632 --> 02:02:11,005
Mas só nós sabemos
sobre ela.

2158
02:02:11,006 --> 02:02:14,052
Contei ao Stimson
as várias opiniões da comunidade.

2159
02:02:14,053 --> 02:02:15,482
Mas qual é a sua opinião?

2160
02:02:16,696 --> 02:02:18,173
Uma vez usada...

2161
02:02:19,274 --> 02:02:23,038
uma guerra nuclear,
talvez qualquer guerra...

2162
02:02:24,579 --> 02:02:26,057
se torna impensável.

2163
02:02:26,457 --> 02:02:28,932
Até que alguém construa
uma bomba maior.

2164
02:02:49,637 --> 02:02:52,856
- Achei que eles ligariam.
- Ainda é dia 5.

2165
02:02:55,224 --> 02:02:57,424
No Japão, já é dia 6.

2166
02:03:09,992 --> 02:03:11,292
Charlotte.

2167
02:03:13,426 --> 02:03:15,040
Tente o Groves.

2168
02:03:16,099 --> 02:03:17,399
<i>Alguma notícia?</i>

2169
02:03:19,652 --> 02:03:22,031
- Charlotte?
- Truman está no rádio.

2170
02:03:23,417 --> 02:03:28,275
<i>Dezesseis horas atrás
um avião americano...</i>

2171
02:03:28,276 --> 02:03:31,549
<i>lançou uma bomba
sobre Hiroshima...</i>

2172
02:03:33,070 --> 02:03:36,351
<i>e inviabilizou sua utilidade
para o inimigo.</i>

2173
02:03:38,189 --> 02:03:44,062
<i>A bomba era mais potente
que 20 mil toneladas de dinamite.</i>

2174
02:03:46,219 --> 02:03:48,292
<i>É uma bomba atômica.</i>

2175
02:03:50,909 --> 02:03:55,225
<i>É um aproveitamento
dos poderes básicos do universo.</i>

2176
02:03:57,913 --> 02:04:01,410
- Groves na linha 1.
<i>Estamos preparados para destruir</i>

2177
02:04:01,411 --> 02:04:06,361
<i>mais rápida e completamente...</i>
- General?

2178
02:04:06,362 --> 02:04:09,240
<i>Estou muito orgulhoso de você
e seu time.</i>

2179
02:04:09,241 --> 02:04:10,805
Correu tudo bem?

2180
02:04:10,806 --> 02:04:13,564
<i>Aparentemente,
foi uma tremenda explosão.</i>

2181
02:04:14,291 --> 02:04:18,266
Todos aqui se sentem
razoavelmente bem com isso.

2182
02:04:19,898 --> 02:04:21,577
Foi um longo caminho.

2183
02:04:21,578 --> 02:04:25,120
<i>Acho que uma das coisas mais sábias
que fiz foi escolher o diretor</i>

2184
02:04:25,121 --> 02:04:26,981
<i>de Los Alamos.</i>

2185
02:04:29,678 --> 02:04:33,802
<i>Nós gastamos
mais de US$ 2 bilhões</i>

2186
02:04:33,803 --> 02:04:37,706
<i>na maior aposta científica
da História,</i>

2187
02:04:38,219 --> 02:04:40,399
<i>e nós vencemos.</i>

2188
02:04:44,662 --> 02:04:47,928
Oppie! Oppie! Oppie!

2189
02:06:08,271 --> 02:06:09,608
O mundo...

2190
02:06:11,339 --> 02:06:12,872
lembrará deste dia.

2191
02:06:31,721 --> 02:06:33,501
É muito cedo para...

2192
02:06:34,114 --> 02:06:37,833
É muito cedo para determinar
os resultados do bombardeio.

2193
02:06:41,192 --> 02:06:43,365
Mas aposto que os japoneses
não gostaram.

2194
02:07:03,602 --> 02:07:05,129
Estou tão orgulhoso.

2195
02:07:06,302 --> 02:07:08,708
Muito orgulhoso
do que vocês conquistaram.

2196
02:07:15,919 --> 02:07:19,655
Queria que a tivéssemos a tempo
de usar contra os alemães!

2197
02:09:02,201 --> 02:09:07,414
TIME
"PAI DA BOMBA ATÔMICA"

2198
02:09:08,527 --> 02:09:09,925
Dr. Oppenheimer?

2199
02:09:10,866 --> 02:09:12,319
Dr. Oppenheimer?

2200
02:09:13,146 --> 02:09:14,465
Bela foto.

2201
02:09:14,976 --> 02:09:17,249
O Presidente Truman
vai recebê-lo agora.

2202
02:09:31,073 --> 02:09:33,909
Dr. Oppenheimer. É uma honra.

2203
02:09:33,910 --> 02:09:35,909
- Sr. Presidente.
- Por favor.

2204
02:09:35,910 --> 02:09:37,222
Obrigado.

2205
02:09:37,595 --> 02:09:39,280
Secretário Byrnes.

2206
02:09:41,262 --> 02:09:44,601
Qual a sensação de ser o homem
mais famoso do mundo?

2207
02:09:45,341 --> 02:09:48,272
Você ajudou a salvar
muitas vidas americanas.

2208
02:09:48,637 --> 02:09:51,396
O que fizemos
em Hiroshima foi...

2209
02:09:51,397 --> 02:09:52,727
E Nagasaki.

2210
02:09:53,700 --> 02:09:55,030
Obviamente.

2211
02:09:55,891 --> 02:09:59,033
Sua invenção nos permitiu
trazer nossos rapazes para casa.

2212
02:09:59,034 --> 02:10:02,598
Não foi bem
uma invenção minha.

2213
02:10:02,599 --> 02:10:04,706
Era você na capa da <i>Time.</i>

2214
02:10:07,449 --> 02:10:10,097
Jim contou que você teme
uma corrida armamentista

2215
02:10:10,098 --> 02:10:12,495
- com os soviéticos.
- Sim, eu...

2216
02:10:16,652 --> 02:10:20,167
É a nossa chance
de assegurar...

2217
02:10:20,727 --> 02:10:24,415
cooperação internacional
em energia atômica,

2218
02:10:24,416 --> 02:10:25,832
e... estou preocupado...

2219
02:10:25,833 --> 02:10:29,132
Você sabe quando os soviéticos
vão ter a bomba?

2220
02:10:29,133 --> 02:10:31,974
- Não sei se eu poderia...
- Nunca.

2221
02:10:32,974 --> 02:10:34,288
Nunca.

2222
02:10:34,594 --> 02:10:38,076
Senhor Presidente,
os russos têm bons físicos

2223
02:10:38,077 --> 02:10:39,601
e... recursos abundantes.

2224
02:10:39,602 --> 02:10:41,576
- Abundantes?
- Sim.

2225
02:10:41,981 --> 02:10:43,900
Eu não penso dessa forma.

2226
02:10:44,453 --> 02:10:48,100
Eles vão fazer tudo
que estiver ao alcance deles...

2227
02:10:51,627 --> 02:10:55,455
Ouvi dizer que você está de saída
de Los Alamos.

2228
02:10:56,583 --> 02:10:59,684
- O que faremos com o local?
- Devolva aos índios.

2229
02:11:07,795 --> 02:11:10,370
Dr. Oppenheimer...

2230
02:11:10,965 --> 02:11:14,206
se o que diz sobre os soviéticos
é verdade,

2231
02:11:14,207 --> 02:11:18,336
temos que aumentar Los Alamos,
não fechar.

2232
02:11:22,016 --> 02:11:23,776
Sr. Presidente...

2233
02:11:29,047 --> 02:11:33,007
Sinto que tenho sangue
nas mãos.

2234
02:11:52,529 --> 02:11:57,843
Você acha que alguém
em Hiroshima ou Nagasaki

2235
02:11:57,844 --> 02:12:00,988
se importa
com quem construiu a bomba?

2236
02:12:04,343 --> 02:12:06,527
Eles se importam
com quem a jogou.

2237
02:12:07,371 --> 02:12:08,702
E fui eu.

2238
02:12:11,148 --> 02:12:13,701
Hiroshima não tem a ver com você.

2239
02:12:19,979 --> 02:12:21,592
Dr. Oppenheimer.

2240
02:12:32,933 --> 02:12:35,925
<i>Não deixe aquele bebê chorão
voltar aqui.</i>

2241
02:12:40,840 --> 02:12:44,274
<i>Robert percebeu que se preocupar
não levava à nada.</i>

2242
02:12:44,754 --> 02:12:47,752
<i>Quando o conheci,
ele já havia abraçado a reputação</i>

2243
02:12:47,753 --> 02:12:49,876
<i>de "pai da bomba".</i>

2244
02:12:49,877 --> 02:12:52,824
E usou isso
para influenciar a política.

2245
02:12:56,093 --> 02:12:58,128
PENSADOR Nº.1 EM
ENERGIA ATÔMICA

2246
02:13:01,475 --> 02:13:05,286
<i>Dr, nos anos seguintes à guerra,
diria que exerceu grande influência</i>

2247
02:13:05,287 --> 02:13:07,123
na política atômica dos EUA?

2248
02:13:07,124 --> 02:13:09,648
<i>Acho que "grande"
seria um exagero.</i>

2249
02:13:09,649 --> 02:13:13,345
Mesmo? Se olharmos o caso dos
isótopos, você não foi responsável

2250
02:13:13,346 --> 02:13:15,771
por destruir toda oposição
à exportação deles?

2251
02:13:15,772 --> 02:13:18,058
Pode se usar
uma garrafa de cerveja...

2252
02:13:18,059 --> 02:13:20,374
para fabricar armas atômicas.
Aliás, já usam.

2253
02:13:20,375 --> 02:13:23,206
Eu era o porta-voz,
mas a opinião entre cientistas

2254
02:13:23,207 --> 02:13:24,606
foi unânime.

2255
02:13:24,607 --> 02:13:26,419
Enquanto McCarthy estava
em ascenção,

2256
02:13:26,420 --> 02:13:28,411
ele sabia
que estava vulnerável.

2257
02:13:28,412 --> 02:13:32,237
O irmão dele estava na lista negra
de todas as universidades do país.

2258
02:13:33,479 --> 02:13:36,886
Lomanitz acabou trabalhando
na ferrovia, instalando trilhos.

2259
02:13:38,442 --> 02:13:41,055
E Chevalier se exilou.

2260
02:13:42,658 --> 02:13:46,314
Mas nada disso impediu Robert
de pressionar o Comitê

2261
02:13:46,315 --> 02:13:49,530
para recomendar o controle de armas
em vez da bomba H.

2262
02:13:51,207 --> 02:13:54,513
Ele ficou arrasado quando Truman
rejeitou a recomendação.

2263
02:13:54,514 --> 02:13:56,620
TRUMAN ANUNCIA
PROGRAMA DA BOMBA H

2264
02:13:56,621 --> 02:13:58,710
Sinto terrivelmente
a falta de Richard.

2265
02:13:58,711 --> 02:14:00,568
Eu sei, Ruth.

2266
02:14:00,569 --> 02:14:04,112
Parte de mim se alegra que ele
não esteja vendo o rumo disso.

2267
02:14:04,878 --> 02:14:06,797
FELIZ ANIVERSÁRIO
ALMIRANTE STRAUSS

2268
02:14:06,798 --> 02:14:08,778
Aí vem o aniversariante.

2269
02:14:08,779 --> 02:14:11,188
- Para se gabar.
- Divirta-se.

2270
02:14:11,770 --> 02:14:14,178
Robert, meu filho e a noiva
estão desesperados

2271
02:14:14,179 --> 02:14:16,931
para conhecer
o pai da bomba atômica, então...

2272
02:14:25,415 --> 02:14:27,507
Este é um momento ruim?

2273
02:14:27,508 --> 02:14:29,186
O que você acha, Lewis?

2274
02:14:29,187 --> 02:14:31,373
Acho que deve ter sido um golpe
para você.

2275
02:14:31,374 --> 02:14:32,979
Para o mundo.

2276
02:14:33,966 --> 02:14:37,331
O mundo? O que Fuchs significa
para o resto do mundo?

2277
02:14:38,732 --> 02:14:40,217
Fuchs?

2278
02:14:40,218 --> 02:14:41,882
Klaus Fuchs?

2279
02:14:43,232 --> 02:14:45,799
Céus. Você não soube.

2280
02:14:48,597 --> 02:14:50,519
Klaus Fuchs,
o cientista britânico

2281
02:14:50,520 --> 02:14:53,643
que você botou no time de implosão
em Los Alamos...

2282
02:14:54,550 --> 02:14:59,302
Ele estava espionando
para os soviéticos o tempo todo.

2283
02:14:59,303 --> 02:15:00,609
Sinto muito.

2284
02:15:06,112 --> 02:15:08,975
<i>Depois que a verdade sobre Fuchs
veio à tona,</i>

2285
02:15:08,976 --> 02:15:11,152
o FBI intensificou
a vigilância sobre ele.

2286
02:15:11,153 --> 02:15:13,523
Ele sabia que o telefone
estava grampeado...

2287
02:15:13,916 --> 02:15:16,089
ele era seguido
por toda parte...

2288
02:15:16,090 --> 02:15:17,785
seu lixo era revirado.

2289
02:15:21,293 --> 02:15:23,838
Mas nunca deixou de falar
o que pensava.

2290
02:15:23,839 --> 02:15:25,702
Um homem de convicção.

2291
02:15:25,703 --> 02:15:29,005
E talvez ele pensasse que a fama
poderia protegê-lo.

2292
02:15:30,614 --> 02:15:33,767
Quando Eisenhower assumiu,
ele viu mais uma oportunidade.

2293
02:15:35,198 --> 02:15:38,069
- E a aproveitou.
- Os EUA e a Rússia

2294
02:15:38,589 --> 02:15:43,043
são comparáveis
a dois escorpiões em uma garrafa,

2295
02:15:43,044 --> 02:15:46,447
ambos capazes
de matar o outro,

2296
02:15:46,448 --> 02:15:49,398
mas somente se arriscarem
a própria vida.

2297
02:15:49,865 --> 02:15:54,021
- Alguns aspectos dessa política...
<i>- Muitos cientistas me culpam,</i>

2298
02:15:54,022 --> 02:15:58,700
<i>- mas como eu poderia protegê-lo?</i>
- ...secreto demais para debater,

2299
02:15:58,701 --> 02:16:00,763
a franqueza
é o único remédio.

2300
02:16:00,764 --> 02:16:04,939
Autoridades em Washington precisam
se alinhar com o povo americano.

2301
02:16:06,000 --> 02:16:08,389
Foi a gota d’água
para os inimigos de Robert.

2302
02:16:08,390 --> 02:16:11,000
Ele teve que perder
a credencial de segurança.

2303
02:16:11,001 --> 02:16:13,788
E com isso, sua credibilidade.

2304
02:16:13,789 --> 02:16:15,911
Mas como eles puderam
fazer isso?

2305
02:16:15,912 --> 02:16:19,327
Ele era herói de guerra, tinha
contado a todos do seu passado.

2306
02:16:19,328 --> 02:16:21,347
Borden desenterrou tudo.

2307
02:16:21,348 --> 02:16:24,632
Como Borden acessaria
o arquivo do FBI de Oppenheimer?

2308
02:16:24,633 --> 02:16:26,086
Teria sido o Nichols?

2309
02:16:26,087 --> 02:16:28,007
Não acho que ele faria isso.

2310
02:16:28,008 --> 02:16:30,408
Mas quem o fez desencadeou
uma tempestade de fogo

2311
02:16:30,409 --> 02:16:32,326
que queimou um caminho
da Casa Branca

2312
02:16:32,327 --> 02:16:35,029
até a minha mesa na AEC.

2313
02:16:35,030 --> 02:16:36,897
Você os viu lá, certo?

2314
02:16:36,898 --> 02:16:40,800
Tenho trabalhado a vida toda
para chegar aqui.

2315
02:16:40,801 --> 02:16:42,870
Gabinete dos Estados Unidos
da América.

2316
02:16:42,871 --> 02:16:44,839
Agora, diante do país inteiro,

2317
02:16:44,840 --> 02:16:46,908
vão me botar de volta
no meu lugar.

2318
02:16:48,343 --> 02:16:51,045
Um reles vendedor de sapatos.

2319
02:16:51,046 --> 02:16:52,913
Lewis, podemos vencer isto.

2320
02:16:52,914 --> 02:16:55,016
Acho que podemos fazer
o Senado entender

2321
02:16:55,017 --> 02:16:57,852
que você cumpriu seu dever,
por doloroso que fosse.

2322
02:16:57,853 --> 02:16:59,620
O testemunho de Hill
vai nos apoiar?

2323
02:16:59,621 --> 02:17:01,554
- Hill se sairá bem.
- Não o conheço,

2324
02:17:01,555 --> 02:17:03,850
mas ele era um dos caras
de Szilard em Chicago

2325
02:17:03,851 --> 02:17:06,001
e eles nunca perdoaram Robert
por não apoiar

2326
02:17:06,002 --> 02:17:08,362
a petição deles
contra o bombardeio do Japão.

2327
02:17:08,363 --> 02:17:13,600
Isto foi fotografado 31 dias
após o bombardeio.

2328
02:17:13,601 --> 02:17:16,370
Virtualmente todos na rua

2329
02:17:16,371 --> 02:17:18,638
por aproximadamente 1,6 km
ao redor,

2330
02:17:18,639 --> 02:17:21,843
foram instantaneamente
e seriamente queimados.

2331
02:17:23,078 --> 02:17:27,647
Os japoneses falaram de pessoas
que usavam roupas listradas

2332
02:17:27,648 --> 02:17:30,618
e que tiveram a pele queimada
em listras.

2333
02:17:31,685 --> 02:17:34,088
Houve muitos que se consideraram
com sorte,

2334
02:17:34,089 --> 02:17:36,824
que saíram das ruínas
dos seus lares

2335
02:17:36,825 --> 02:17:38,692
apenas levemente feridos.

2336
02:17:39,828 --> 02:17:41,595
Mas, de qualquer maneira,
morreram.

2337
02:17:42,264 --> 02:17:45,399
Morreram dias ou semanas depois

2338
02:17:45,400 --> 02:17:48,768
devido à grande quantidade
de radiação emitida

2339
02:17:48,769 --> 02:17:50,671
no momento da explosão.

2340
02:17:51,873 --> 02:17:53,974
Você leu essa besteira
nos jornais?

2341
02:17:53,975 --> 02:17:56,811
Um físico britânico está dizendo
que as bombas atômicas

2342
02:17:56,812 --> 02:17:59,013
não foram o último ato
da II Guerra Mundial,

2343
02:17:59,014 --> 02:18:02,183
mas o primeiro dessa Guerra Fria
com a Rússia.

2344
02:18:02,184 --> 02:18:03,683
Qual físico?

2345
02:18:03,684 --> 02:18:05,119
Creio que você o conheceu.

2346
02:18:05,120 --> 02:18:06,720
Patrick Blackett.

2347
02:18:09,191 --> 02:18:10,790
Ele pode não estar errado.

2348
02:18:10,791 --> 02:18:12,159
Stimson agora me diz

2349
02:18:12,160 --> 02:18:15,429
que bombardeamos um inimigo
que já estava derrotado.

2350
02:18:15,430 --> 02:18:18,967
Robert, você tem
toda a influência agora.

2351
02:18:18,968 --> 02:18:20,419
Por favor.

2352
02:18:20,420 --> 02:18:23,070
Peça que continuem
minha pesquisa sobre a "Super".

2353
02:18:23,071 --> 02:18:24,871
Não posso nem vou, Edward.

2354
02:18:24,872 --> 02:18:26,407
Por que não?

2355
02:18:26,408 --> 02:18:28,459
Não é o uso correto
dos nossos recursos.

2356
02:18:28,460 --> 02:18:30,277
Acredita mesmo nisso?

2357
02:18:30,278 --> 02:18:32,679
J. Robert Oppenheimer.

2358
02:18:32,680 --> 02:18:35,083
O guru enigmático do átomo.

2359
02:18:36,384 --> 02:18:38,153
Ninguém sabe em que
você acredita.

2360
02:18:39,254 --> 02:18:41,155
Você sabe?

2361
02:18:41,156 --> 02:18:43,891
<i>Uma última vez,
nosso diretor do programa,</i>

2362
02:18:43,892 --> 02:18:45,861
<i>Dr. J. Robert Oppenheimer.</i>

2363
02:18:47,062 --> 02:18:49,545
Espero que nos anos vindouros

2364
02:18:49,546 --> 02:18:52,900
vocês recordem seu trabalho aqui
com orgulho.

2365
02:18:52,901 --> 02:18:55,302
Mas hoje esse orgulho
deve ser moderado

2366
02:18:55,303 --> 02:18:57,638
por uma profunda preocupação.

2367
02:18:58,690 --> 02:19:00,740
Se armas atômicas
vierem a ser adicionadas

2368
02:19:00,741 --> 02:19:03,177
aos arsenais
de um mundo beligerante,

2369
02:19:03,178 --> 02:19:06,779
então o dia virá
em que as pessoas amaldiçoarão

2370
02:19:06,780 --> 02:19:08,550
o nome Los Alamos.

2371
02:19:12,341 --> 02:19:14,371
Perdão, Almirante.

2372
02:19:14,372 --> 02:19:16,357
Parei para pegar isto.

2373
02:19:16,358 --> 02:19:19,011
TIME - O CASO STRAUSS
- Parece bem favorável.

2374
02:19:19,012 --> 02:19:20,327
Ali está Oppenheimer.

2375
02:19:20,328 --> 02:19:21,929
O que diz a legenda?

2376
02:19:21,930 --> 02:19:24,765
"J. Robert Oppenheimer,
Strauss lutou..."

2377
02:19:26,334 --> 02:19:27,903
"e os EUA venceram."

2378
02:19:28,705 --> 02:19:30,037
Isso vai funcionar.

2379
02:19:30,038 --> 02:19:32,206
Essas foram as suas palavras
no outro dia.

2380
02:19:32,207 --> 02:19:33,709
Precisávamos mudar o enfoque.

2381
02:19:33,710 --> 02:19:35,042
Mas como você sabia

2382
02:19:35,043 --> 02:19:36,877
o que a revista "Time"
escreveria?

2383
02:19:36,878 --> 02:19:39,114
Henry Luce é um amigo.

2384
02:19:45,832 --> 02:19:48,788
Você ficou me ouvindo
explicar como são as coisas,

2385
02:19:48,789 --> 02:19:51,492
mas estava muito à frente
o tempo todo.

2386
02:19:51,493 --> 02:19:54,495
A sobrevivência em Washintgon

2387
02:19:54,496 --> 02:19:57,464
é saber como conseguir
que as coisas sejam feitas.

2388
02:19:57,465 --> 02:19:58,767
Certo.

2389
02:20:00,386 --> 02:20:02,236
O que foi que você disse
sobre Borden?

2390
02:20:02,237 --> 02:20:05,240
"Por que ser pego
com a faca na mão?"

2391
02:20:07,075 --> 02:20:10,078
Começo a achar que Borden
segurava a faca para você.

2392
02:20:12,147 --> 02:20:14,415
Tudo vai se resumir
a quanta influência

2393
02:20:14,416 --> 02:20:16,952
Borden foi capaz de exercer
sobre Teller.

2394
02:20:17,450 --> 02:20:18,986
Eu disse algo engraçado?

2395
02:20:18,987 --> 02:20:20,387
Só "Borden, Borden, Borden"

2396
02:20:20,388 --> 02:20:24,191
quando sabemos que é o Strauss.

2397
02:20:24,192 --> 02:20:26,193
Lewis me levou a Princeton,
Kitty.

2398
02:20:26,194 --> 02:20:28,929
E aí você o humilhou
perante o Congresso.

2399
02:20:28,930 --> 02:20:31,765
Porém mais útil que um sanduíche.

2400
02:20:34,722 --> 02:20:37,271
- Como me saí?
- Recesso de 10 minutos.

2401
02:20:37,272 --> 02:20:39,507
Talvez um pouco bem demais,
Robert.

2402
02:20:39,508 --> 02:20:40,808
Isso foi há 6 anos.

2403
02:20:40,809 --> 02:20:42,543
Sabe,
as pessoas mais vingativas

2404
02:20:42,544 --> 02:20:44,178
são pacientes como santos.

2405
02:20:44,179 --> 02:20:47,014
Strauss deixou bem claro
que é neutro.

2406
02:20:47,015 --> 02:20:50,551
Acorde! É Strauss.

2407
02:20:50,552 --> 02:20:53,520
Sempre tem sido Strauss
e você sabe disso.

2408
02:20:53,521 --> 02:20:55,156
Por que não luta contra ele?

2409
02:20:56,092 --> 02:20:57,392
Pelo amor de Deus.

2410
02:20:58,493 --> 02:21:01,162
Não foi Nichols ou Hoover

2411
02:21:01,163 --> 02:21:03,251
ou um dos caras de Truman.
Foi você.

2412
02:21:03,252 --> 02:21:04,898
Você deu o dossiê para Borden.

2413
02:21:04,899 --> 02:21:06,567
Você o atiçou
contra Oppenheimer.

2414
02:21:06,568 --> 02:21:09,036
- Você o convenceu a...
- Borden...

2415
02:21:09,037 --> 02:21:10,971
não precisou ser convencido.

2416
02:21:10,972 --> 02:21:13,107
Não se apresse,
analise o dossiê todo.

2417
02:21:13,108 --> 02:21:16,043
Escreva sua conclusão
e mande para o FBI.

2418
02:21:16,044 --> 02:21:18,312
O material é obviamente farto,

2419
02:21:18,313 --> 02:21:21,015
mas não há nada de novo aqui.

2420
02:21:21,016 --> 02:21:22,583
Suas conclusões serão.

2421
02:21:22,584 --> 02:21:24,818
E elas terão que ser
respondidas.

2422
02:21:24,819 --> 02:21:26,420
Hoover entregará para McCarthy?

2423
02:21:26,421 --> 02:21:28,029
Oppenheimer é muito escorregadio

2424
02:21:28,030 --> 02:21:30,057
para aquele palhaço vaidoso.

2425
02:21:30,058 --> 02:21:32,960
Discuti isso com Hoover,
ele manterá McCarthy afastado,

2426
02:21:32,961 --> 02:21:34,595
enquanto você faz isso
com a AEC.

2427
02:21:34,596 --> 02:21:36,463
- Um julgamento.
- Não.

2428
02:21:36,464 --> 02:21:40,267
Sem julgamento. Não pode dar
uma plataforma a Oppenheimer.

2429
02:21:40,268 --> 02:21:42,069
Não pode torná-lo um mártir.

2430
02:21:42,070 --> 02:21:44,139
Precisamos de uma destruição
sistemática

2431
02:21:44,140 --> 02:21:47,145
da credibilidade de Oppenheimer
para que ele nunca mais fale

2432
02:21:47,146 --> 02:21:48,876
sobre segurança nacional.

2433
02:21:48,877 --> 02:21:50,945
E depois?

2434
02:21:52,147 --> 02:21:55,517
Uma salinha acanhada,
longe dos holofotes.

2435
02:22:01,507 --> 02:22:03,357
<i>Um simples procedimento
burocrático.</i>

2436
02:22:03,358 --> 02:22:06,026
A credencial de liberação dele
está para ser renovada.

2437
02:22:06,027 --> 02:22:08,897
Mande suas acusações para o FBI.

2438
02:22:10,532 --> 02:22:14,135
Hoover as enviará para a AEC,
você será forçado a agir.

2439
02:22:14,969 --> 02:22:16,303
Escreva uma denúncia

2440
02:22:16,304 --> 02:22:17,889
<i>e diga a Oppenheimer</i>

2441
02:22:17,890 --> 02:22:20,422
<i>que a credencial dele
não será renovada.</i>

2442
02:22:20,423 --> 02:22:22,423
<i>Mas ofereça a ele
uma chance de apelar.</i>

2443
02:22:22,424 --> 02:22:24,724
Como pode ver, Robert,
ainda não está assinado.

2444
02:22:24,725 --> 02:22:27,114
- Posso ficar com isto?
- Não.

2445
02:22:27,115 --> 02:22:29,383
Se você decidir apelar,

2446
02:22:29,384 --> 02:22:30,951
terão que te mandar uma cópia.

2447
02:22:30,952 --> 02:22:34,221
Quando ele apelar, e acredite,
ele apelará...

2448
02:22:34,222 --> 02:22:36,657
nomearei um Conselho.

2449
02:22:36,658 --> 02:22:39,159
Naturalmente, eles terão
aconselhamento jurídico.

2450
02:22:39,160 --> 02:22:41,128
- Promotor?
- Com outro nome.

2451
02:22:41,129 --> 02:22:43,298
- Quem?
- Roger Robb.

2452
02:22:44,333 --> 02:22:45,983
Robb terá autorização
de segurança

2453
02:22:45,984 --> 02:22:47,885
<i>para examinar o dossiê
de Oppenheimer.</i>

2454
02:22:47,886 --> 02:22:49,288
Assim como o Conselho Gray.

2455
02:22:49,289 --> 02:22:50,789
O advogado de defesa não terá.

2456
02:22:51,971 --> 02:22:53,271
Uma audiência fechada.

2457
02:22:53,272 --> 02:22:55,526
<i>A chamada
informação derrogatória</i>

2458
02:22:55,527 --> 02:22:57,177
na sua denúncia contra mim.

2459
02:22:57,178 --> 02:22:59,680
Sem audiência. Sem repórteres.

2460
02:22:59,681 --> 02:23:03,151
- Sem ônus da prova.
- Sem ônus da prova?

2461
02:23:04,519 --> 02:23:06,020
Não vamos condenar.

2462
02:23:07,499 --> 02:23:09,024
Vamos apenas negar.

2463
02:23:14,295 --> 02:23:16,407
O que foi que você disse?

2464
02:23:17,098 --> 02:23:20,467
"É assim que se joga o jogo."

2465
02:23:20,468 --> 02:23:23,470
Perdoe a minha ingenuidade.

2466
02:23:23,471 --> 02:23:25,440
Amadores buscam o sol.

2467
02:23:26,175 --> 02:23:27,475
E se queimam.

2468
02:23:28,543 --> 02:23:31,462
O poder fica nas sombras.

2469
02:23:31,463 --> 02:23:34,756
Mas, senhor, você está
fora das sombras agora.

2470
02:23:34,757 --> 02:23:36,767
Sim, e é por isso
que tem que funcionar.

2471
02:23:36,768 --> 02:23:38,086
Bem...

2472
02:23:39,387 --> 02:23:41,555
Teller testemunhará esta manhã.

2473
02:23:41,556 --> 02:23:43,991
Isso ajudará. E depois...

2474
02:23:43,992 --> 02:23:45,459
Hill testemunhará à tarde.

2475
02:23:45,460 --> 02:23:47,397
Hill também vai nos ajudar.

2476
02:23:50,165 --> 02:23:53,084
Como pode ver, Robert,
ainda não está assinado.

2477
02:23:53,085 --> 02:23:54,402
Posso ficar com isto?

2478
02:23:54,403 --> 02:23:55,703
Não.

2479
02:23:57,572 --> 02:23:59,606
Se você decidir apelar,

2480
02:23:59,607 --> 02:24:02,444
terão que te mandar uma cópia.

2481
02:24:06,014 --> 02:24:08,316
Leve meu carro e o motorista.
Eu insisto.

2482
02:24:12,972 --> 02:24:15,022
Terei que consultar
meus advogados, Lewis.

2483
02:24:15,023 --> 02:24:17,758
Claro. Mas não demore muito.

2484
02:24:17,759 --> 02:24:19,961
Não posso manter Nichols
afastado.

2485
02:24:26,100 --> 02:24:28,303
Lamento que tenhamos chegado
a isto, Robert.

2486
02:24:28,304 --> 02:24:29,604
Acho errado.

2487
02:24:42,784 --> 02:24:44,251
<i>Nichols quer que eu lute</i>

2488
02:24:44,252 --> 02:24:46,286
<i>para que ele possa
registrar tudo.</i>

2489
02:24:46,287 --> 02:24:48,188
Strauss quer que eu desista.

2490
02:24:48,189 --> 02:24:51,058
Strauss sabe que você não pode
fazer isso,

2491
02:24:51,059 --> 02:24:53,527
estaria aceitando
as acusações.

2492
02:24:53,528 --> 02:24:55,229
Perderá o seu trabalho.

2493
02:24:55,230 --> 02:24:57,877
Perderá a sua reputação,
perderemos nossa casa.

2494
02:24:57,878 --> 02:25:00,170
Robert, temos que lutar.

2495
02:25:02,738 --> 02:25:05,138
Como advogado da AEC,
não posso representar você.

2496
02:25:05,139 --> 02:25:06,707
Chamarei Lloyd Garrison.

2497
02:25:06,708 --> 02:25:08,275
Ele é bom.

2498
02:25:08,276 --> 02:25:12,013
O melhor, mas devo te avisar...

2499
02:25:12,680 --> 02:25:15,148
esta não será uma luta limpa.

2500
02:25:15,149 --> 02:25:17,184
<i>Durante a sua entrevista
com Boris Pash</i>

2501
02:25:17,185 --> 02:25:19,686
em 1943,
você mencionou microfilme?

2502
02:25:19,687 --> 02:25:21,189
- Não.
- Aba 11,

2503
02:25:21,190 --> 02:25:23,516
página 1, parágrafo 3.
Você nunca disse

2504
02:25:23,517 --> 02:25:26,327
"Homem do consulado
perito no uso de microfilme"?

2505
02:25:26,328 --> 02:25:27,628
- Desculpe.
- Não.

2506
02:25:27,629 --> 02:25:30,129
Queria saber qual documento
o sr. Robb está citando

2507
02:25:30,130 --> 02:25:31,632
e se nos forneceriam
uma cópia.

2508
02:25:31,633 --> 02:25:33,633
O documento é confidencial,
sr. Garrison.

2509
02:25:33,634 --> 02:25:35,988
Voltemos à informação
em primeira mão.

2510
02:25:35,989 --> 02:25:37,289
Isto é primeira mão.

2511
02:25:37,290 --> 02:25:39,007
Como assim, Roger?

2512
02:25:40,475 --> 02:25:42,310
Havia uma gravação
da entrevista.

2513
02:25:46,281 --> 02:25:48,215
Você deixou meu cliente
aqui sentado

2514
02:25:48,216 --> 02:25:49,816
e potencialmente
cometer perjúrio

2515
02:25:49,817 --> 02:25:52,319
e este tempo todo
você tinha uma gravação?

2516
02:25:52,320 --> 02:25:54,170
Ninguém mandou seu cliente
falsear

2517
02:25:54,171 --> 02:25:57,271
- as primeiras respostas dele.
- Falsear? Isso foi há 12 anos!"

2518
02:25:57,272 --> 02:25:58,672
Podemos ouvir essa gravação?

2519
02:25:58,673 --> 02:26:00,322
Você não tem autorização.

2520
02:26:00,323 --> 02:26:01,930
Mas está lendo para os autos.

2521
02:26:01,931 --> 02:26:03,530
Por favor, por favor.

2522
02:26:03,531 --> 02:26:07,167
Este processo está interessado
na verdade ou é uma armadilha?

2523
02:26:07,168 --> 02:26:09,636
Se é na verdade,
onde está a transparência?

2524
02:26:09,637 --> 02:26:11,305
Onde está a lista
de testemunhas?

2525
02:26:11,306 --> 02:26:13,875
Sr. Garrison, isto não é
um julgamemto, como sabe.

2526
02:26:13,876 --> 02:26:15,776
Regras probatórias
não se aplicam.

2527
02:26:15,777 --> 02:26:17,677
Estamos lidando
com segurança nacional.

2528
02:26:17,678 --> 02:26:19,278
Sim, senhor,
com todo o respeito,

2529
02:26:19,279 --> 02:26:21,783
não consigo ver
como a segurança nacional

2530
02:26:21,784 --> 02:26:24,434
impede que a acusação nos dê
uma lista de testemunhas.

2531
02:26:24,435 --> 02:26:26,720
- Precisamos de um recesso.
- Cavalheiros,

2532
02:26:26,721 --> 02:26:28,456
vocês têm as minhas palavras.

2533
02:26:28,457 --> 02:26:30,757
Se dizem que foram transcritas,
eu aceitarei.

2534
02:26:30,758 --> 02:26:33,907
Já expliquei que usei
uma história intrincada.

2535
02:26:33,908 --> 02:26:37,034
Mas por que alguém inventaria
uma história tão elaborada?

2536
02:26:37,035 --> 02:26:38,933
Porque fui um idiota.

2537
02:26:38,934 --> 02:26:40,567
Por que mentiu?

2538
02:26:40,568 --> 02:26:43,203
Claramente com a intenção
de não revelar

2539
02:26:43,204 --> 02:26:45,005
quem era o intermediário.

2540
02:26:45,006 --> 02:26:47,374
Seu amigo, Haakon Chevalier,
o comunista.

2541
02:26:47,375 --> 02:26:49,676
Ele ainda é seu amigo?

2542
02:26:49,677 --> 02:26:51,062
É.

2543
02:26:53,214 --> 02:26:56,150
Dr. Rabi, obrigado
por comparecer.

2544
02:26:56,151 --> 02:26:57,919
Sabe quem mais a acusação
chamou?

2545
02:26:57,920 --> 02:27:00,082
Teller, obviamente.

2546
02:27:01,190 --> 02:27:03,390
- Chamaram Lawrence.
- O que ele disse?

2547
02:27:03,391 --> 02:27:05,978
Que não iria ajudá-los, mas...

2548
02:27:05,979 --> 02:27:07,279
Mas?

2549
02:27:07,280 --> 02:27:09,695
Strauss disse a ele
que você e Ruth Tolman

2550
02:27:09,696 --> 02:27:11,766
<i>têm um caso há anos.</i>

2551
02:27:11,767 --> 02:27:14,095
<i>O tempo todo que viveu</i>
com eles em Pasadena.

2552
02:27:14,602 --> 02:27:16,303
Ele convenceu Lawrence

2553
02:27:16,304 --> 02:27:17,905
que Richard morreu de tristeza.

2554
02:27:17,906 --> 02:27:19,239
Isso é um absurdo.

2555
02:27:19,240 --> 02:27:21,809
- Qual parte?
- A tristeza.

2556
02:27:21,810 --> 02:27:23,878
Richard nunca descobriu.

2557
02:27:23,879 --> 02:27:25,679
Lawrence vai testemunhar?

2558
02:27:25,680 --> 02:27:27,181
Não sei.

2559
02:27:27,715 --> 02:27:29,383
Dr. Rabi,

2560
02:27:29,384 --> 02:27:32,486
que posições no governo
você ocupa atualmente?

2561
02:27:32,487 --> 02:27:35,422
Sou o diretor
do Comitê Consultivo Geral

2562
02:27:35,423 --> 02:27:38,358
da AEC, sucedendo
o Dr. Oppenheimer.

2563
02:27:38,359 --> 02:27:40,832
E há quanto tempo conhece
o Dr. Oppenheimer?

2564
02:27:41,229 --> 02:27:42,864
Desder 1928.

2565
02:27:42,865 --> 02:27:44,966
Eu o conheço muito bem.

2566
02:27:44,967 --> 02:27:46,968
Suficiente bem para falar

2567
02:27:46,969 --> 02:27:49,569
sobre a lealdade e o caráter
dele?

2568
02:27:49,570 --> 02:27:53,607
Dr. Oppenheimer é um homem
de caráter exemplar.

2569
02:27:53,608 --> 02:27:56,277
E ele é leal aos Estados Unidos,

2570
02:27:56,278 --> 02:27:57,578
aos amigos dele

2571
02:27:57,579 --> 02:28:00,098
e às instituições
das quais ele faz parte.

2572
02:28:01,450 --> 02:28:02,750
Coma.

2573
02:28:21,736 --> 02:28:23,470
O que foi aquilo?

2574
02:28:23,471 --> 02:28:25,324
Nada com que se preocupar.

2575
02:28:27,742 --> 02:28:29,477
<i>Após o teste da bomba A russa,</i>

2576
02:28:29,478 --> 02:28:32,178
Dr. Lawrence veio ver você
sobre a bomba de hidrogênio?

2577
02:28:32,179 --> 02:28:33,848
Melhor perguntar a ele.

2578
02:28:33,849 --> 02:28:35,415
Pretendo fazer isso.

2579
02:28:35,416 --> 02:28:37,986
Você diria que o Dr. Oppenheimer

2580
02:28:37,987 --> 02:28:40,054
se opunha firmemente
à bomba H?

2581
02:28:40,055 --> 02:28:44,197
Não. Ele achava que um programa
de fusão viria às custas

2582
02:28:44,198 --> 02:28:46,127
do nosso excelente programa
de fissão.

2583
02:28:46,128 --> 02:28:47,895
Mas acabou não sendo o caso.

2584
02:28:47,896 --> 02:28:50,003
No caso de ambos poderem
ser feitos.

2585
02:28:50,004 --> 02:28:52,768
Supondo que este Conselho
não se sente satisfeito

2586
02:28:52,769 --> 02:28:54,308
que no depoimento dele aqui

2587
02:28:54,309 --> 02:28:56,906
Dr. Oppenheimer não tenha sido
totalmente sincero,

2588
02:28:56,907 --> 02:28:59,500
acha que ele deveria
receber a credencial?

2589
02:28:59,501 --> 02:29:01,800
Por que fazer isso
contra um homem

2590
02:29:01,801 --> 02:29:03,858
com as conquistas
que Dr. Oppenheimer tem?

2591
02:29:03,859 --> 02:29:05,501
Olhe o histórico dele.

2592
02:29:05,502 --> 02:29:08,003
Temos uma bomba A.
Aliás, uma série inteira.

2593
02:29:08,004 --> 02:29:09,605
E uma série de bombas "Super".

2594
02:29:09,606 --> 02:29:10,906
O que mais querem?

2595
02:29:11,399 --> 02:29:12,699
Sereias?

2596
02:29:13,006 --> 02:29:16,298
Mas conheço o secretário Strauss
há muitos anos,

2597
02:29:16,299 --> 02:29:20,007
e sinto a necessidade
de agradecer o caloroso apoio

2598
02:29:20,008 --> 02:29:22,607
à ciência e aos cientistas
que Lewis sempre deu.

2599
02:29:22,608 --> 02:29:23,941
Faremos uma pausa,

2600
02:29:23,942 --> 02:29:25,446
se não houver
tópicos urgentes.

2601
02:29:25,447 --> 02:29:28,408
Senador, mais uma vez,
eu gostaria de solicitar

2602
02:29:28,409 --> 02:29:31,207
que nos forneçam
uma lista de testemunhas.

2603
02:29:31,208 --> 02:29:33,859
E eu lembro ao indicado
que nem sempre

2604
02:29:33,860 --> 02:29:35,806
temos tal informação
com antecedência.

2605
02:29:35,807 --> 02:29:38,802
Mas sabemos que Dr. Hill
virá depois do almoço.

2606
02:29:38,803 --> 02:29:40,703
Sr. Presidente,
a próxima testemunha,

2607
02:29:40,704 --> 02:29:44,709
Dr. Lawrence,
teve uma crise de colite.

2608
02:29:47,707 --> 02:29:50,110
Vamos prosseguir
com o Sr. William Borden.

2609
02:29:51,004 --> 02:29:52,451
Sr. Borden, bem-vindo.

2610
02:29:52,452 --> 02:29:53,752
Sente-se, por favor.

2611
02:29:55,102 --> 02:29:56,402
Sr. Borden,

2612
02:29:57,498 --> 02:30:00,301
quando investigou
o Dr. Oppenheimer,

2613
02:30:00,302 --> 02:30:02,401
chegou a alguma conclusão?

2614
02:30:02,402 --> 02:30:04,206
- Sim.
- E em dado momento,

2615
02:30:04,207 --> 02:30:05,951
o senhor expressou
suas conclusões

2616
02:30:05,952 --> 02:30:09,634
em uma carta
a J. Edgar Hoover, do FBI?

2617
02:30:09,635 --> 02:30:11,493
- Correto.
- Antes de redigir a carta,

2618
02:30:11,494 --> 02:30:13,163
o senhor discutiu o conteúdo

2619
02:30:13,164 --> 02:30:15,800
com alguém
da Comissão de Energia Atômica?

2620
02:30:15,801 --> 02:30:16,801
Não.

2621
02:30:16,802 --> 02:30:19,201
- E tem uma cópia da carta?
- Possuo uma aqui.

2622
02:30:19,202 --> 02:30:21,508
Poderia fazer
a gentileza de lê-la?

2623
02:30:22,402 --> 02:30:23,803
"Caro Sr. Hoover,

2624
02:30:23,804 --> 02:30:27,403
- o objetivo desta carta é..."
- Desculpe, eu gostaria de...

2625
02:30:27,794 --> 02:30:29,502
Qual é o objetivo do atraso?

2626
02:30:29,503 --> 02:30:31,011
Ele só vai ler a carta.

2627
02:30:31,801 --> 02:30:34,604
Sr. Presidente, é a primeira vez
que vejo tal carta,

2628
02:30:34,605 --> 02:30:36,356
e vi declarações aqui...

2629
02:30:36,357 --> 02:30:40,201
ao menos uma, que creio que ninguém
gostaria que constasse dos autos.

2630
02:30:40,202 --> 02:30:42,750
São acusações que não foram
feitas anteriormente.

2631
02:30:42,751 --> 02:30:44,753
Que não estão
na acusação de Nichols.

2632
02:30:44,754 --> 02:30:46,952
Acusações cuja natureza
não cabe aqui.

2633
02:30:46,953 --> 02:30:49,448
A testemunha escreveu a carta
por vontade própria,

2634
02:30:49,449 --> 02:30:51,901
fornecendo provas
já apresentadas ao Conselho.

2635
02:30:51,902 --> 02:30:53,550
As conclusões dele são válidas,

2636
02:30:53,551 --> 02:30:56,950
assim como as conclusões positivas
dos amigos do Dr. Oppenheimer.

2637
02:30:56,951 --> 02:30:58,350
Vale para ambas as partes.

2638
02:30:58,351 --> 02:31:00,850
Há quanto tempo
possui esta carta?

2639
02:31:00,851 --> 02:31:04,400
Acho que eu não deveria ser alvo
de um questionamento seu.

2640
02:31:04,401 --> 02:31:07,605
Sr. Garrison, já que nós
do Conselho lemos a carta,

2641
02:31:07,606 --> 02:31:09,506
não seria melhor
tê-la nos autos?

2642
02:31:10,602 --> 02:31:11,902
Vamos prosseguir.

2643
02:31:13,704 --> 02:31:15,104
"Caro Sr. Hoover,

2644
02:31:15,804 --> 02:31:18,503
o objetivo desta carta é dar
a minha opinião,

2645
02:31:18,504 --> 02:31:20,197
com base em anos de estudo

2646
02:31:20,198 --> 02:31:22,304
das provas sigilosas disponíveis,

2647
02:31:22,800 --> 02:31:24,899
de que muito provavelmente

2648
02:31:24,900 --> 02:31:29,206
J. Robert Oppenheimer
é agente da União Soviética.

2649
02:31:29,800 --> 02:31:32,299
As seguintes conclusões
são justificadas.

2650
02:31:32,300 --> 02:31:36,902
Primeiro: entre 1929 e 1942,
muito provavelmente,

2651
02:31:36,903 --> 02:31:40,552
J. Robert Oppenheimer
era um comunista tão inflexível

2652
02:31:40,553 --> 02:31:43,205
que ofereceu informações
aos soviéticos.

2653
02:31:43,206 --> 02:31:45,498
Segundo: muito provavelmente,

2654
02:31:45,499 --> 02:31:49,210
desde então, ele atuou
como um agente de espionagem.

2655
02:31:49,792 --> 02:31:52,600
Terceiro: muito provavelmente,

2656
02:31:52,601 --> 02:31:55,151
desde então, ele atua
sob uma diretiva soviética

2657
02:31:55,152 --> 02:31:57,802
para influenciar
a política militar dos EUA..."

2658
02:31:57,803 --> 02:32:00,501
- Lamento, Robert.
- "de energia atômica, inteligência

2659
02:32:00,502 --> 02:32:03,651
- e política diplomática."
- Um dia, alguém dirá a verdade

2660
02:32:03,652 --> 02:32:05,400
sobre o que está acontecendo aqui?

2661
02:32:05,401 --> 02:32:08,408
<i>Agora, ouviremos o Dr. David Hill.</i>

2662
02:32:18,301 --> 02:32:19,802
Dr. Hill,

2663
02:32:19,803 --> 02:32:21,613
gostaria de fazer uma declaração?

2664
02:32:23,504 --> 02:32:24,807
Obrigado.

2665
02:32:24,808 --> 02:32:28,746
Me pediram para testemunhar
sobre Lewis Strauss.

2666
02:32:28,747 --> 02:32:31,004
Um homem que dedicou
anos de serviço

2667
02:32:31,005 --> 02:32:33,954
em altos cargos do governo

2668
02:32:33,955 --> 02:32:38,702
e é conhecido por ser determinado,
trabalhador e inteligente.

2669
02:32:39,902 --> 02:32:42,007
As opiniões que expressarei
são pessoais,

2670
02:32:42,402 --> 02:32:45,300
mas creio que muito do que direi
ajudará a sinalizar

2671
02:32:45,301 --> 02:32:48,803
por que a maioria dos cientistas
deste país

2672
02:32:48,804 --> 02:32:51,211
preferiria ver o Sr. Strauss

2673
02:32:51,805 --> 02:32:53,804
totalmente fora do governo.

2674
02:32:55,599 --> 02:32:58,701
Está se referindo
à hostilidade

2675
02:32:58,702 --> 02:33:01,503
de certos cientistas
em relação ao Sr. Strauss

2676
02:33:01,504 --> 02:33:03,758
por seu compromisso
com a segurança,

2677
02:33:03,759 --> 02:33:06,609
como foi demonstrado
no caso Oppenheimer?

2678
02:33:09,101 --> 02:33:10,401
Não.

2679
02:33:10,402 --> 02:33:12,904
É pelo desejo de vingança pessoal

2680
02:33:12,905 --> 02:33:15,405
que ele demonstrou
contra o Dr. Oppenheimer.

2681
02:33:17,300 --> 02:33:18,600
Ordem.

2682
02:33:19,101 --> 02:33:20,401
Ordem!

2683
02:33:20,402 --> 02:33:24,205
Parece, para a maioria
dos cientistas deste país,

2684
02:33:25,202 --> 02:33:28,144
que Robert Oppenheimer
está sendo ridicularizado

2685
02:33:28,145 --> 02:33:29,501
e submetido a um suplício

2686
02:33:29,502 --> 02:33:32,604
por ter expressado
suas opiniões sinceras.

2687
02:33:33,006 --> 02:33:35,500
Dr. Bush, pensei estar servindo

2688
02:33:35,501 --> 02:33:37,447
meu país ao participar
deste Conselho.

2689
02:33:37,448 --> 02:33:41,863
Nenhum Conselho neste país
deveria julgar um homem

2690
02:33:41,864 --> 02:33:44,205
porque ele expressou
opiniões fortes.

2691
02:33:44,206 --> 02:33:46,702
Se quiserem julgar esse caso,
deveriam me julgar.

2692
02:33:47,405 --> 02:33:50,412
Me perdoem, senhores,
se pareço alterado.

2693
02:33:51,404 --> 02:33:52,806
Mas eu estou.

2694
02:33:52,807 --> 02:33:54,347
Dr. Hill, já ouvimos

2695
02:33:54,348 --> 02:33:56,902
que o Sr. Strauss
não apresentou as acusações

2696
02:33:56,903 --> 02:34:00,048
nem participou das audiências
contra o Dr. Oppenheimer.

2697
02:34:00,049 --> 02:34:01,811
O caso Oppenheimer foi

2698
02:34:02,505 --> 02:34:05,653
criado e em grande parte conduzido

2699
02:34:05,654 --> 02:34:07,507
pelo ressentimento
de Lewis Strauss.

2700
02:34:08,703 --> 02:34:11,749
Oppenheimer aniquilou
o argumento de Strauss

2701
02:34:11,750 --> 02:34:13,900
sobre o envio de isótopos
para a Noruega,

2702
02:34:13,901 --> 02:34:17,398
e Strauss nunca o perdoou
por essa humilhação pública.

2703
02:34:17,898 --> 02:34:20,650
Outra controvérsia envolveu
suas diferentes opiniões

2704
02:34:20,651 --> 02:34:24,704
sobre a contribuição da bomba H
para a segurança nacional.

2705
02:34:24,705 --> 02:34:27,049
Strauss recorreu
à sua segurança pessoal

2706
02:34:27,050 --> 02:34:30,706
para destruir a eficácia
de Oppenheimer,

2707
02:34:30,707 --> 02:34:33,696
e Strauss conseguiu achar
alguns homens ambiciosos

2708
02:34:33,697 --> 02:34:36,648
que também discordavam
das opiniões de Oppenheimer

2709
02:34:36,649 --> 02:34:39,904
e invejavam seu prestígio
nos círculos governamentais.

2710
02:34:39,905 --> 02:34:42,152
Minha suposição sempre foi,
e ainda é,

2711
02:34:42,153 --> 02:34:44,302
a de que ele é leal
aos Estados Unidos.

2712
02:34:44,603 --> 02:34:46,451
Acredito nisso. E acreditarei

2713
02:34:46,452 --> 02:34:48,998
até ver provas conclusivas
do contrário.

2714
02:34:49,307 --> 02:34:50,948
O senhor acredita ou não

2715
02:34:50,949 --> 02:34:53,305
que o Dr. Oppenheimer
é um risco à segurança?

2716
02:34:56,799 --> 02:34:58,246
Em muitas ocasiões,

2717
02:34:58,247 --> 02:35:00,401
eu vi o Dr. Oppenheimer
agir de formas

2718
02:35:00,402 --> 02:35:03,700
que, para mim, foram
extremamente difíceis de entender.

2719
02:35:03,701 --> 02:35:06,250
Eu discordei dele
em diversas questões,

2720
02:35:06,251 --> 02:35:08,207
e suas ações, francamente,
me pareceram

2721
02:35:08,208 --> 02:35:09,797
confusas e complicadas.

2722
02:35:09,798 --> 02:35:11,600
Dito isso, eu sinto

2723
02:35:11,601 --> 02:35:14,591
que quero ver
o interesse vital deste país

2724
02:35:14,592 --> 02:35:16,801
nas mãos de alguém
que eu entenda melhor,

2725
02:35:16,802 --> 02:35:18,611
e, portanto, confie mais.

2726
02:35:19,502 --> 02:35:21,013
- Obrigado, doutor.
- Obrigado.

2727
02:35:25,052 --> 02:35:26,352
Desculpe.

2728
02:35:28,894 --> 02:35:31,007
<i>Você apertou a mão dele?</i>

2729
02:35:32,098 --> 02:35:34,062
Eu teria cuspido na cara dele.

2730
02:35:34,063 --> 02:35:36,201
Não sei se o Conselho
gostaria disso.

2731
02:35:36,202 --> 02:35:37,856
Acha pouco cavalheiresco?

2732
02:35:37,857 --> 02:35:40,702
Eu acho que estão sendo
muito cavalheiros.

2733
02:35:40,703 --> 02:35:42,802
Gray deve ver
o que Robb está fazendo.

2734
02:35:42,803 --> 02:35:44,797
Por que ele não acaba logo
com isso?

2735
02:35:44,798 --> 02:35:47,103
E você aperta a mão do Teller.

2736
02:35:47,104 --> 02:35:50,411
Você precisa parar
de bancar o mártir.

2737
02:35:51,304 --> 02:35:53,603
Conforme as atuais diretrizes
da AEC,

2738
02:35:53,604 --> 02:35:56,002
o senhor liberaria
o Dr. Oppenheimer hoje?

2739
02:36:02,105 --> 02:36:04,102
Segundo a minha interpretação

2740
02:36:04,504 --> 02:36:06,751
da Lei da Energia Atômica,

2741
02:36:06,752 --> 02:36:08,607
que não existia

2742
02:36:08,608 --> 02:36:11,407
quando contratei
o Dr. Oppenheimer em 1942,

2743
02:36:12,601 --> 02:36:15,906
eu não daria a ele
a liberação hoje,

2744
02:36:16,401 --> 02:36:18,302
se eu estivesse na Comissão.

2745
02:36:18,303 --> 02:36:19,800
Obrigado, general.
Terminamos.

2746
02:36:19,801 --> 02:36:22,012
Mas acho que eu não liberaria
nenhum deles.

2747
02:36:22,403 --> 02:36:23,703
Terminamos.

2748
02:36:26,405 --> 02:36:28,800
Dr. Oppenheimer
não foi o responsável

2749
02:36:28,801 --> 02:36:30,149
pela seleção ou liberação

2750
02:36:30,150 --> 02:36:32,750
- de Klaus Fuchs, certo?
- Não. De forma alguma.

2751
02:36:32,751 --> 02:36:34,354
E não ia querer que o Conselho

2752
02:36:34,355 --> 02:36:37,305
ficasse com a impressão
de que veio questionar

2753
02:36:37,306 --> 02:36:39,204
a lealdade dele
aos Estados Unidos

2754
02:36:39,205 --> 02:36:40,847
na operação de Los Alamos.

2755
02:36:40,848 --> 02:36:42,048
De jeito nenhum.

2756
02:36:42,049 --> 02:36:45,312
Espero não ter levado alguém
a pensar o contrário.

2757
02:36:46,301 --> 02:36:47,601
Obrigado, general.

2758
02:37:05,202 --> 02:37:07,345
Não deveríamos
deixá-los esperando.

2759
02:37:07,346 --> 02:37:08,701
Ela vem.

2760
02:37:08,702 --> 02:37:10,603
Você quer que ela venha?

2761
02:37:10,604 --> 02:37:13,150
Só tolos e adolescentes
acham que entendem

2762
02:37:13,151 --> 02:37:14,854
o relacionamento
de outras pessoas.

2763
02:37:14,855 --> 02:37:17,112
Você não é
nem um e nem outro.

2764
02:37:19,399 --> 02:37:22,410
Kitty e eu somos adultos.

2765
02:37:23,309 --> 02:37:25,200
<i>Passamos por poucas e boas.</i>

2766
02:37:25,902 --> 02:37:27,202
Ela vai se sair bem.

2767
02:37:28,201 --> 02:37:30,254
Descreveria sua opinião
sobre o comunismo

2768
02:37:30,255 --> 02:37:32,150
como pró, contra ou neutra?

2769
02:37:32,151 --> 02:37:33,850
Fortemente contra.

2770
02:37:33,851 --> 02:37:36,358
Não tenho mais nada a ver
com o comunismo desde...

2771
02:37:36,359 --> 02:37:38,309
Desde 1936, desde...

2772
02:37:39,309 --> 02:37:41,110
Desde antes de conhecer o Robert.

2773
02:37:42,754 --> 02:37:44,054
Terminamos.

2774
02:37:44,953 --> 02:37:46,253
<i>Os autos mostram</i>

2775
02:37:46,254 --> 02:37:47,956
<i>que Oppenheimer
não foi interrogado</i>

2776
02:37:47,957 --> 02:37:51,206
<i>por um Conselho imparcial
dirigido por Gray.</i>

2777
02:37:51,207 --> 02:37:53,152
<i>Ele foi interrogado
por um promotor</i>

2778
02:37:53,153 --> 02:37:56,203
<i>que usou todos os truques
de um profissional experiente.</i>

2779
02:37:56,204 --> 02:37:57,607
Agora está dizendo

2780
02:37:57,608 --> 02:38:00,603
que o Conselho Gray
permitiu uma promotoria.

2781
02:38:01,004 --> 02:38:02,603
Se estivesse nesse Conselho,

2782
02:38:03,201 --> 02:38:05,405
eu teria protestado
contra a tática

2783
02:38:05,406 --> 02:38:08,253
do homem que atuou
de fato como um promotor.

2784
02:38:08,254 --> 02:38:10,112
Um homem não nomeado
pelo Conselho,

2785
02:38:11,299 --> 02:38:13,108
mas por Lewis Strauss.

2786
02:38:15,303 --> 02:38:16,603
Quem era?

2787
02:38:17,904 --> 02:38:19,204
Como?

2788
02:38:19,602 --> 02:38:20,902
Quem era o homem?

2789
02:38:21,203 --> 02:38:22,503
Roger Robb.

2790
02:38:22,902 --> 02:38:24,309
Sra. Oppenheimer...

2791
02:38:28,801 --> 02:38:31,106
Já teve carteira
do Partido Comunista?

2792
02:38:32,703 --> 02:38:35,001
Eu... não tenho certeza.

2793
02:38:35,002 --> 02:38:36,302
Não tem certeza?

2794
02:38:38,855 --> 02:38:40,155
Bem...

2795
02:38:43,551 --> 02:38:44,851
Bem...?

2796
02:38:53,400 --> 02:38:56,351
Imagino que o ato
de se filiar ao Partido

2797
02:38:56,352 --> 02:38:59,613
exija enviar dinheiro
e receber uma carteira, não?

2798
02:39:02,948 --> 02:39:04,248
É.

2799
02:39:09,800 --> 02:39:11,100
Desculpe.

2800
02:39:11,908 --> 02:39:13,208
Sim.

2801
02:39:15,303 --> 02:39:17,707
É que já faz tanto tempo,

2802
02:39:17,708 --> 02:39:19,258
- não é, Sr. Robb?
- Nem tanto.

2803
02:39:19,259 --> 02:39:21,946
- Dá para esquecer.
- Devolveu a carteira ou rasgou?

2804
02:39:21,947 --> 02:39:23,804
Aquela de cuja existência
me esqueci?

2805
02:39:23,805 --> 02:39:26,709
- A carteira de membro.
- Não faço a menor ideia.

2806
02:39:29,603 --> 02:39:32,002
Pode-se fazer distinção

2807
02:39:32,003 --> 02:39:33,903
entre comunismo soviético
e comunismo?

2808
02:39:34,208 --> 02:39:37,403
Quando era filiada, eu achava
que eram totalmente diferentes.

2809
02:39:37,404 --> 02:39:40,201
Achava que o Partido Comunista
dos Estados Unidos

2810
02:39:40,202 --> 02:39:42,457
se preocupava com nossos
problemas domésticos.

2811
02:39:42,458 --> 02:39:44,102
E eu não acho mais isso.

2812
02:39:44,103 --> 02:39:46,651
Acho que há uma ligação
e se espalhando pelo mundo,

2813
02:39:46,652 --> 02:39:48,856
e eu acho isso
desde que saí do Partido,

2814
02:39:48,857 --> 02:39:50,555
há 16 anos.

2815
02:39:50,556 --> 02:39:52,150
- Mas...
- 17 anos.

2816
02:39:52,151 --> 02:39:53,400
Me enganei.

2817
02:39:53,401 --> 02:39:55,206
- Mas disse...
- Desculpe, 18.

2818
02:39:56,301 --> 02:39:57,812
Há 18 anos.

2819
02:39:58,899 --> 02:40:01,753
Mas sabe que seu marido
fazia contribuições

2820
02:40:01,754 --> 02:40:04,356
para a Guerra Civil Espanhola
até 1942?

2821
02:40:04,357 --> 02:40:06,556
Sabia que Robert dava
dinheiro às vezes.

2822
02:40:06,557 --> 02:40:09,291
Sabia que o dinheiro ia
para canais do Partido?

2823
02:40:09,292 --> 02:40:10,700
Não quer dizer "através"?

2824
02:40:10,701 --> 02:40:12,103
- Como?
- Acho que quer dizer

2825
02:40:12,104 --> 02:40:14,300
"através de canais do Partido",
não é?

2826
02:40:14,301 --> 02:40:15,502
- Sim!
- Sim?

2827
02:40:15,503 --> 02:40:17,501
- Sim!
- Sim.

2828
02:40:17,502 --> 02:40:20,805
Então, não seria justo dizer
que até 1942

2829
02:40:20,806 --> 02:40:23,807
seu marido não parou de ter
algo a ver com o Partido?

2830
02:40:24,903 --> 02:40:27,705
Não precisa dizer "sim" ou "não",
responda como quiser.

2831
02:40:27,706 --> 02:40:29,345
Sei disso, obrigada.

2832
02:40:29,346 --> 02:40:30,852
É que a sua pergunta

2833
02:40:30,853 --> 02:40:34,003
- não foi formulada direito.
- Entende onde quero chegar?

2834
02:40:34,004 --> 02:40:35,761
- Sim.
- Então por que não responde?

2835
02:40:35,762 --> 02:40:37,358
Porque não gostei da sua frase.

2836
02:40:37,359 --> 02:40:39,505
"Tinha algo a ver
com o Partido Comunista."

2837
02:40:39,506 --> 02:40:42,749
Porque ele nunca teve algo
a ver com o Partido, como tal.

2838
02:40:42,750 --> 02:40:45,254
Sei que deu dinheiro
para refugiados espanhóis.

2839
02:40:45,255 --> 02:40:48,316
Sei que se interessou
por ideias comunistas...

2840
02:40:48,317 --> 02:40:49,950
Há dois tipos de comunistas?

2841
02:40:49,951 --> 02:40:53,265
Os intelectuais
e o velho e bom camarada?

2842
02:40:54,150 --> 02:40:56,198
Não saberia responder esta.

2843
02:40:56,938 --> 02:40:58,468
Eu também não.

2844
02:41:04,666 --> 02:41:06,500
Boa noite.

2845
02:41:06,501 --> 02:41:08,236
Robert,
não dá pra vencer isso.

2846
02:41:08,237 --> 02:41:10,537
É um tribunal armado
com resultado marcado.

2847
02:41:10,538 --> 02:41:12,273
Por que passar por mais isso?

2848
02:41:12,774 --> 02:41:14,735
Tenho meus motivos.

2849
02:41:15,811 --> 02:41:18,477
Está bem. Boa noite.

2850
02:41:23,117 --> 02:41:24,619
Ele tem razão.

2851
02:41:25,453 --> 02:41:27,589
Acho que não entendeu, Albert.

2852
02:41:27,590 --> 02:41:29,025
Não?

2853
02:41:29,026 --> 02:41:32,019
Deixei meu país
para nunca mais voltar.

2854
02:41:32,794 --> 02:41:34,795
Você serviu bem à sua nação.

2855
02:41:34,796 --> 02:41:38,465
Se é essa recompensa
que você recebe, então...

2856
02:41:38,466 --> 02:41:41,593
talvez seja melhor
virar as costas.

2857
02:41:42,316 --> 02:41:44,805
Droga, eu amo este país.

2858
02:41:44,806 --> 02:41:47,408
Então diga a eles
para irem pro inferno.

2859
02:41:47,409 --> 02:41:49,375
O interessante é que isto
não é mais

2860
02:41:49,376 --> 02:41:51,478
uma audiência de confirmação,

2861
02:41:51,479 --> 02:41:53,680
agora se trata
de um julgamento.

2862
02:41:53,681 --> 02:41:55,416
Um julgamento!

2863
02:41:56,250 --> 02:41:59,306
Não é bom ele dizer a todos
que você provocou as audiências.

2864
02:41:59,307 --> 02:42:01,288
Ele não tem prova nenhuma.

2865
02:42:01,289 --> 02:42:04,758
É certo que ele não pode provar
que dei o processo ao Borden.

2866
02:42:04,759 --> 02:42:06,528
Não estamos no tribunal,
senhor.

2867
02:42:06,529 --> 02:42:07,929
Não há ônus da prova.

2868
02:42:07,930 --> 02:42:09,897
Certo, eles não estão condenando,

2869
02:42:10,785 --> 02:42:12,327
apenas negando.

2870
02:42:12,328 --> 02:42:14,434
Por que Hill veio aqui
para me destruir?

2871
02:42:14,435 --> 02:42:16,103
Qual o ponto de vista dele?

2872
02:42:16,104 --> 02:42:18,338
Precisam de motivo
para fazer a coisa certa?

2873
02:42:18,339 --> 02:42:19,674
É como ele vê.

2874
02:42:19,675 --> 02:42:22,576
Oppenheimer envenenou
os cientistas contra mim,

2875
02:42:22,577 --> 02:42:24,311
desde o primeiro encontro.

2876
02:42:24,312 --> 02:42:27,581
<i>Não sei o que Oppenheimer
disse a ele naquele dia,</i>

2877
02:42:27,582 --> 02:42:30,583
mas Einstein
nem me olhou nos olhos.

2878
02:42:30,584 --> 02:42:31,901
Albert.

2879
02:42:31,902 --> 02:42:34,523
<i>Oppenheimer sabe manipular
seus iguais.</i>

2880
02:42:34,524 --> 02:42:35,857
E em Los Alamos,

2881
02:42:35,858 --> 02:42:38,192
se aproveitou
da ingenuidade dos cientistas

2882
02:42:38,193 --> 02:42:41,154
que achavam que opinariam sobre
nosso uso do trabalho deles.

2883
02:42:41,155 --> 02:42:43,566
Mas nunca ache
que ele é ingênuo.

2884
02:42:43,567 --> 02:42:44,899
Doutor.

2885
02:42:44,900 --> 02:42:46,901
Em seu trabalho
na bomba de hidrogênio,

2886
02:42:46,902 --> 02:42:50,604
foi dissuadido
por algum escrúpulo moral?

2887
02:42:50,605 --> 02:42:52,240
Sim, claro.

2888
02:42:52,241 --> 02:42:53,949
Mas continuou seu trabalho,
não?

2889
02:42:53,950 --> 02:42:55,877
Sim, um trabalho de exploração

2890
02:42:55,878 --> 02:42:58,145
e não de preparação de uma arma.

2891
02:42:58,146 --> 02:43:00,247
Quer dizer,
era uma coisa acadêmica?

2892
02:43:00,248 --> 02:43:01,665
Não era algo acadêmico.

2893
02:43:01,666 --> 02:43:03,828
Se você pode criar
uma bomba de hidrogênio,

2894
02:43:03,829 --> 02:43:05,219
é questão de vida ou morte.

2895
02:43:05,220 --> 02:43:06,785
Até 1942, você pressionou pelo

2896
02:43:06,786 --> 02:43:08,382
desenvolvimento da bomba H,
não?

2897
02:43:08,383 --> 02:43:11,591
Pressionar não é o termo.
Apoiei e trabalhei nela, sim.

2898
02:43:11,592 --> 02:43:13,861
E quando os escrúpulos
se sobressaíram

2899
02:43:13,862 --> 02:43:17,230
a ponto de você se opor
à bomba de hidrogênio?

2900
02:43:17,231 --> 02:43:19,200
Quando foi sugerido
que fosse a política

2901
02:43:19,201 --> 02:43:21,402
dos EUA fabricá-las
a todo custo,

2902
02:43:21,403 --> 02:43:24,135
sem considerar o equilíbrio
entre essas armas

2903
02:43:24,136 --> 02:43:26,820
e armas atômicas
como parte de nosso arsenal.

2904
02:43:27,730 --> 02:43:30,277
O que os escrúpulos
têm a ver com isso?

2905
02:43:30,278 --> 02:43:31,946
O que os escrúpulos...

2906
02:43:31,947 --> 02:43:33,536
- têm a ver com isso?
- Sim.

2907
02:43:33,537 --> 02:43:35,696
Oppenheimer queria possuir
a bomba atômica.

2908
02:43:35,697 --> 02:43:37,651
Queria ser o homem
que sacudiu a Terra.

2909
02:43:37,652 --> 02:43:40,754
Ele fala em colocar
o gênio nuclear

2910
02:43:40,755 --> 02:43:42,223
de volta na garrafa.

2911
02:43:42,224 --> 02:43:45,659
Eu digo que conheço
J. Robert Oppenheimer,

2912
02:43:45,660 --> 02:43:49,496
e se ele pudesse,
faria tudo do mesmo jeito.

2913
02:43:49,497 --> 02:43:52,867
Sabia que ele nunca disse
que lamenta por Hiroshima?

2914
02:43:52,868 --> 02:43:55,769
Faria tudo de novo. Por quê?

2915
02:43:55,770 --> 02:43:59,972
Porque isso o tornou o homem
mais importante que já existiu.

2916
02:43:59,973 --> 02:44:03,410
Bem, nós usamos a bomba atômica
livremente...

2917
02:44:03,411 --> 02:44:05,375
E Doutor, você auxiliou
na escolha

2918
02:44:05,376 --> 02:44:07,229
do alvo para a bomba no Japão,

2919
02:44:07,230 --> 02:44:09,044
- não foi?
- Sim.

2920
02:44:09,045 --> 02:44:12,520
Então sabia que lançando
no alvo que escolheu

2921
02:44:12,521 --> 02:44:15,756
milhares de civis seriam
mortos ou feridos, certo?

2922
02:44:15,757 --> 02:44:17,691
Sim, não tantos
quanto aconteceu.

2923
02:44:17,692 --> 02:44:20,434
Quantos foram mortos
ou feridos?

2924
02:44:20,435 --> 02:44:22,930
- 70 mil.
- 70 mil em Hiroshima e...

2925
02:44:22,931 --> 02:44:24,398
110 mil nas duas.

2926
02:44:24,399 --> 02:44:26,345
No dia de cada bombardeio?

2927
02:44:27,637 --> 02:44:28,837
Sim.

2928
02:44:28,838 --> 02:44:30,764
E nas semanas e anos
que se seguiram?

2929
02:44:30,765 --> 02:44:33,306
Foi estimado entre 50 e 100 mil.

2930
02:44:33,307 --> 02:44:35,442
- Ao menos 220 mil mortos?
- Sim.

2931
02:44:35,443 --> 02:44:37,345
Algum escrúpulo com isso?

2932
02:44:38,515 --> 02:44:39,847
Alguns terríveis.

2933
02:44:39,848 --> 02:44:41,448
E ainda assim você disse

2934
02:44:41,449 --> 02:44:43,851
que o bombardeio de Hiroshima
foi um sucesso.

2935
02:44:43,852 --> 02:44:45,452
Tecnicamente um sucesso.

2936
02:44:45,453 --> 02:44:47,221
Foi tecnicamente um sucesso.

2937
02:44:47,222 --> 02:44:49,626
Também dizem que ajudou
a acabar com a guerra.

2938
02:44:49,627 --> 02:44:52,726
Você apoiaria uma bomba
de hidrogênio em Hiroshima?

2939
02:44:52,727 --> 02:44:54,294
Isso não faria sentido.

2940
02:44:54,295 --> 02:44:56,663
- Por quê?
- O alvo seria pequeno demais.

2941
02:44:56,664 --> 02:44:58,468
Supondo que houvesse
um alvo no Japão

2942
02:44:58,469 --> 02:45:00,778
grande o suficiente
para uma arma termonuclear,

2943
02:45:00,779 --> 02:45:02,579
você se colocaria
contra o uso dela?

2944
02:45:02,580 --> 02:45:04,448
Não foi uma questão
a mim confrontada.

2945
02:45:04,449 --> 02:45:06,047
Estou lhe confrontando agora.

2946
02:45:06,048 --> 02:45:07,741
Era tudo parte do plano dele.

2947
02:45:07,742 --> 02:45:09,342
Ele queria a glória,

2948
02:45:09,343 --> 02:45:11,545
a falsa culpa dissimulada
dos arrogantes

2949
02:45:11,546 --> 02:45:13,384
para usar como
uma merda de coroa.

2950
02:45:13,385 --> 02:45:16,516
Dizer: "Não podemos seguir
esse caminho",

2951
02:45:16,517 --> 02:45:19,170
mesmo sabendo
que tínhamos que fazê-lo.

2952
02:45:19,171 --> 02:45:22,271
Você se oporia ao lançamento
de uma arma termonuclear no Japão

2953
02:45:22,272 --> 02:45:24,892
- por conta de escrúpulos?
- Sim, acho que sim.

2954
02:45:24,893 --> 02:45:26,794
Você se opôs ao lançamento
da bomba A

2955
02:45:26,795 --> 02:45:28,662
em Hiroshima por escrúpulos?

2956
02:45:28,663 --> 02:45:30,307
Apresentamos
nossos argumentos...

2957
02:45:30,308 --> 02:45:31,692
Não, você!
Pergunto a você.

2958
02:45:31,693 --> 02:45:33,324
- Apresentei...
- Nós, não. Você!

2959
02:45:33,325 --> 02:45:35,169
...os argumentos
contra o lançamento,

2960
02:45:35,170 --> 02:45:36,609
mas não os apoiei.

2961
02:45:36,610 --> 02:45:39,873
Após trabalhar dia e noite
durante 3 anos construindo a bomba,

2962
02:45:39,874 --> 02:45:42,002
você então questionou
o seu uso?

2963
02:45:42,003 --> 02:45:44,236
Fui indagado pelo
Secretário da Guerra

2964
02:45:44,237 --> 02:45:45,779
sobre a visão dos cientistas.

2965
02:45:45,780 --> 02:45:48,421
Passei a ele os pontos contra
e a favor.

2966
02:45:48,422 --> 02:45:50,661
Você apoiou o lançamento
da bomba A no Japão!

2967
02:45:50,662 --> 02:45:52,263
- Como "apoiei"?
- Você apoiou!

2968
02:45:52,264 --> 02:45:53,464
Como "apoiei"?

2969
02:45:53,465 --> 02:45:56,022
- Ajudou a escolher o alvo, não?
- Fiz meu trabalho.

2970
02:45:56,023 --> 02:45:58,631
Não tomava decisões políticas
em Los Alamos.

2971
02:45:58,632 --> 02:46:00,275
Faria o que me fosse
solicitado.

2972
02:46:00,276 --> 02:46:02,181
E construiria a bomba H
também, não?

2973
02:46:02,182 --> 02:46:03,530
- Não?
- Não poderia.

2974
02:46:03,531 --> 02:46:05,365
Não perguntei isso, Doutor!

2975
02:46:05,366 --> 02:46:07,835
E o relatório do GAC
que você era co-autor

2976
02:46:07,836 --> 02:46:09,786
que após o teste atômico soviético
dizia

2977
02:46:09,787 --> 02:46:12,289
que uma "Super" bomba
nunca deveria ser construída?

2978
02:46:12,290 --> 02:46:14,447
O que quisemos dizer,
o que eu quis dizer...

2979
02:46:14,448 --> 02:46:16,642
- O que você, quem?
- O que eu quis dizer...

2980
02:46:17,194 --> 02:46:19,113
E os russos não fariam
qualquer coisa

2981
02:46:19,114 --> 02:46:21,414
para aumentar seu poder?

2982
02:46:21,415 --> 02:46:23,240
Se fizéssemos,
eles fariam também.

2983
02:46:23,241 --> 02:46:25,635
Nosso esforço só alimentaria
os esforços deles,

2984
02:46:25,636 --> 02:46:27,838
assim como aconteceu
com a bomba atômica.

2985
02:46:27,839 --> 02:46:30,600
"Como a bomba atômica,"
exatamente!

2986
02:46:31,608 --> 02:46:35,897
Nenhum escrúpulo em 1945,
muitos em 1949.

2987
02:46:39,935 --> 02:46:41,769
Dr. Oppenheimer.

2988
02:46:43,437 --> 02:46:46,073
Quando suas convicções morais
cresceram

2989
02:46:46,074 --> 02:46:48,477
em relação
à bomba de hidrogênio?

2990
02:46:55,918 --> 02:46:57,771
Quando ficou claro para mim

2991
02:46:58,854 --> 02:47:02,390
que usaríamos
qualquer arma que tivéssemos.

2992
02:47:05,127 --> 02:47:07,460
<i>J. Robert Oppenheimer, o mártir.</i>

2993
02:47:07,461 --> 02:47:10,097
Dei a ele exatamente
o que ele queria.

2994
02:47:10,765 --> 02:47:12,499
Ser lembrado pela Trindade,

2995
02:47:12,500 --> 02:47:15,036
não por Hiroshima,

2996
02:47:15,037 --> 02:47:17,471
não por Nagasaki.

2997
02:47:20,008 --> 02:47:22,242
Ele deveria ser grato a mim.

2998
02:47:23,019 --> 02:47:24,419
Mas não vai ser.

2999
02:47:27,515 --> 02:47:29,150
Ainda temos votos suficientes,

3000
02:47:29,151 --> 02:47:30,852
ou é o momento
da minha carreira

3001
02:47:30,853 --> 02:47:35,022
prestes à maior humilhação
pública da minha vida?

3002
02:47:35,023 --> 02:47:37,492
O Senado vai concluir a votação.

3003
02:47:37,493 --> 02:47:38,826
Você vai sobreviver.

3004
02:47:38,827 --> 02:47:40,593
Ótimo, pois chamem a imprensa.

3005
02:47:40,594 --> 02:47:42,495
Dr. J. Robert Oppenheimer.

3006
02:47:42,496 --> 02:47:45,498
Este Conselho,
tendo escutado seu testemunho

3007
02:47:45,499 --> 02:47:48,668
e o de vários de seus atuais
e antigos colegas,

3008
02:47:48,669 --> 02:47:50,704
chegou à conclusão unânime

3009
02:47:50,705 --> 02:47:53,373
de que é um cidadão leal.

3010
02:47:55,110 --> 02:47:56,776
Entretanto,

3011
02:47:56,777 --> 02:48:00,415
diante de suas continuadas
associações

3012
02:48:00,416 --> 02:48:01,748
e negligência

3013
02:48:01,749 --> 02:48:03,918
com o aparato de segurança
deste país,

3014
02:48:03,919 --> 02:48:07,487
junto à sua, de certa forma,
perturbadora condução

3015
02:48:07,488 --> 02:48:09,789
do programa
da bomba de hidrogênio

3016
02:48:09,790 --> 02:48:11,625
e a lamentável
falta de franqueza

3017
02:48:11,626 --> 02:48:14,028
em algumas respostas
a este Conselho,

3018
02:48:14,029 --> 02:48:16,931
nós votamos 2 contra 1

3019
02:48:16,932 --> 02:48:20,067
para negar a renovação da sua
credencial de segurança.

3020
02:48:20,068 --> 02:48:23,788
Um parecer completo por escrito,
preparado pelo Sr. Evans,

3021
02:48:23,789 --> 02:48:26,740
será encaminhado à AEC
nos próximos dias.

3022
02:48:26,741 --> 02:48:28,409
Isto é tudo.

3023
02:48:32,180 --> 02:48:33,514
- Gordon...
- Roger.

3024
02:48:38,902 --> 02:48:40,204
<i>Robert.</i>

3025
02:48:41,073 --> 02:48:42,373
<i>Robert.</i>

3026
02:48:45,093 --> 02:48:46,594
Não...

3027
02:48:48,964 --> 02:48:51,030
Não recolha os lençóis.

3028
02:48:53,567 --> 02:48:54,970
Tire uma foto com ele.

3029
02:48:54,971 --> 02:48:56,370
Senhor, senhor...

3030
02:48:56,371 --> 02:48:58,739
Dois minutos. Dois minutos.

3031
02:48:58,740 --> 02:49:00,120
- Terão sua foto.
- Senhor!

3032
02:49:00,121 --> 02:49:01,575
Esperamos tanto.

3033
02:49:01,576 --> 02:49:02,935
Boa noite, senhor.

3034
02:49:03,711 --> 02:49:05,609
É oficial?

3035
02:49:07,149 --> 02:49:11,060
Bem, houve algumas
resistências inesperadas.

3036
02:49:16,158 --> 02:49:18,859
Fui rejeitado. Não é?

3037
02:49:18,860 --> 02:49:20,829
- Lamento, senhor.
- Muito bem.

3038
02:49:28,103 --> 02:49:29,798
Quem foram essas resistências?

3039
02:49:29,799 --> 02:49:32,605
Foram três,

3040
02:49:32,606 --> 02:49:35,443
liderados pelo senador júnior
de Massachusetts.

3041
02:49:35,444 --> 02:49:37,011
Um jovem querendo se afirmar

3042
02:49:37,012 --> 02:49:39,580
e que não gostou do que você fez
com Oppenheimer.

3043
02:49:39,581 --> 02:49:41,030
Qual o nome dele?

3044
02:49:42,262 --> 02:49:44,820
Kennedy.
John F. Kennedy.

3045
02:49:48,390 --> 02:49:49,690
Kitty?

3046
02:49:55,747 --> 02:49:59,200
Achou que permitindo
que humilhassem você

3047
02:49:59,201 --> 02:50:01,769
o mundo iria lhe perdoar?

3048
02:50:05,307 --> 02:50:06,741
Não irá.

3049
02:50:09,111 --> 02:50:10,511
Veremos.

3050
02:50:20,788 --> 02:50:22,190
Caramba.

3051
02:50:24,725 --> 02:50:26,793
Você disse que ficaria tudo bem.

3052
02:50:26,794 --> 02:50:29,196
Eu não tinha todos os fatos.

3053
02:50:29,197 --> 02:50:31,349
Aqui está um fato.
O Presidente Eisenhower

3054
02:50:31,350 --> 02:50:34,135
pôs a Medalha da Liberdade
no meu peito, ano passado,

3055
02:50:34,136 --> 02:50:36,669
porque eu sempre fiz
o que é certo para este país.

3056
02:50:36,670 --> 02:50:39,206
Não me querem no Gabinete?

3057
02:50:39,207 --> 02:50:41,674
Tudo bem.

3058
02:50:41,675 --> 02:50:44,012
Talvez devessem convidar
Oppenheimer, então.

3059
02:50:44,013 --> 02:50:45,313
Talvez o façam.

3060
02:50:46,015 --> 02:50:47,348
Eu lhe disse,

3061
02:50:47,349 --> 02:50:49,985
ele botou os cientistas
contra mim, um por um,

3062
02:50:49,986 --> 02:50:51,286
começando com Einstein.

3063
02:50:51,287 --> 02:50:53,686
Eu falei do Einstein,
quando estava no lago.

3064
02:50:53,687 --> 02:50:55,222
Sim, mas sabe, senhor,

3065
02:50:55,223 --> 02:50:58,926
já que ninguém sabe
o que um disse ao outro,

3066
02:50:58,927 --> 02:51:02,997
pode ser que não tenham
falado de você.

3067
02:51:02,998 --> 02:51:06,067
Podem ter falado de algo...

3068
02:51:06,068 --> 02:51:07,634
mais importante.

3069
02:51:07,635 --> 02:51:09,071
<i>Sr. Strauss!</i>

3070
02:51:12,407 --> 02:51:14,809
Aqui! Sr. Strauss!

3071
02:51:22,384 --> 02:51:23,716
Obrigado.

3072
02:51:23,717 --> 02:51:25,117
Albert.

3073
02:51:28,256 --> 02:51:30,234
O homem do momento.

3074
02:51:33,862 --> 02:51:37,264
Uma vez você fez
uma recepção para mim.

3075
02:51:37,265 --> 02:51:39,828
Em Berkeley.
Você me deu um prêmio.

3076
02:51:39,829 --> 02:51:41,129
Sim.

3077
02:51:41,770 --> 02:51:44,405
Vocês achavam que eu tinha
perdido a capacidade

3078
02:51:44,406 --> 02:51:47,274
de compreender
o que eu comecei.

3079
02:51:47,275 --> 02:51:50,743
Então o prêmio na verdade
não era para mim,

3080
02:51:50,744 --> 02:51:52,709
era para todos vocês.

3081
02:51:55,016 --> 02:51:57,051
Agora é a sua vez

3082
02:51:57,052 --> 02:52:01,505
de lidar com as consequências
da sua conquista.

3083
02:52:02,690 --> 02:52:04,024
E um dia,

3084
02:52:04,025 --> 02:52:06,660
quando tiverem punido você
o suficiente...

3085
02:52:08,063 --> 02:52:11,967
irão lhe servir salmão
e salada de batata.

3086
02:52:15,703 --> 02:52:17,462
Vão fazer discursos...

3087
02:52:17,463 --> 02:52:18,971
SELO DO PRESIDENTE
DOS EUA

3088
02:52:18,972 --> 02:52:20,475
<i>...e dar uma medalha.</i>

3089
02:52:22,550 --> 02:52:24,188
Olá, Frank.

3090
02:52:24,189 --> 02:52:25,933
Se está feliz, estou feliz.

3091
02:52:32,387 --> 02:52:35,723
<i>Bater nas suas costas,
dizer que está tudo perdoado.</i>

3092
02:52:37,259 --> 02:52:38,883
<i>Mas lembre-se...</i>

3093
02:52:40,295 --> 02:52:42,364
<i>não será por você.</i>

3094
02:52:47,132 --> 02:52:48,932
<i>Será por eles.</i>

3095
02:53:02,217 --> 02:53:03,551
Albert.

3096
02:53:05,493 --> 02:53:08,489
Quando passei a você
aqueles cálculos,

3097
02:53:08,490 --> 02:53:11,899
achávamos que poderíamos iniciar
uma reação em cadeia

3098
02:53:12,421 --> 02:53:14,261
que destruiria o mundo inteiro.

3099
02:53:15,650 --> 02:53:17,264
Lembro bem.

3100
02:53:17,765 --> 02:53:19,107
E daí?

3101
02:53:22,470 --> 02:53:24,206
Acho que fizemos isso.

3102
02:54:18,367 --> 02:54:23,367
- Art Subs -
15 anos fazendo Arte para você!

3103
02:54:23,368 --> 02:54:28,368
Curta a gente no Face:
<i>facebook.com/ArtSubs</i>

3104
02:54:28,369 --> 02:54:33,369
E siga a gente no Insta:
<i>instagram.com/ArtSubs_Legendas</i>`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)