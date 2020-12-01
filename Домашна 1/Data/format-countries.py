short_names = 'za,vn,uy,ua,tw,tr,th,sv,sk,sg,se,ru,ro,py,pt,pl,ph,pe,pa,nz,no,nl,ni,my,mx,lv,lu,lt,it,jp,is,in,il,ie,id,hu,hn,hk,gt,gr,fr,fi,es,ee,ec,do,us,gb,ar,at,au,be,bg,bo,br,ca,ch,cl,co,cr,cz,de,dk'
big_names = 'South Africa,Vietnam,Uruguay,Ukraine,Taiwan,Turkey,Thailand,El Salvador,Slovakia,Singapore,Sweden,Russian Federation,Romania,Paraguay,Portugal,Poland,Philippines,Peru,Panama,New Zeland,Norway,Netherlands,Nicaragua,Malaysia,Mexico,Latvia,Luxembourg,Lithuania,Japan,Italy,Iceland,India,Israel,Ireland,Indonesia,Hungary,Honduras,Hong Kong,Guatemala,Greece,France,Finland,Spain,Estonia,Ecuador,Dominican Republic,united states,united kingdom,argentina,austria,australia,belgium,bulgaria,bolivia,brazil,canada,switzerland,chile,colombia,costa rica,czech republic,germany,denmark'.upper()

short_names = list(short_names.split(','))
big_names = list(big_names.split(','))
dictionary = []

if len(short_names) == len(big_names):
    dictionary = [(x,y) for x,y in zip(short_names, big_names)]
else:
    print('Viki si utnala nesto')

with open('countries.txt', 'w') as f:
    for d in dictionary:
        s = f'{d[0]},{d[1]}\n'
        f.write(s)
