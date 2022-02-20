# A program működése
A program lelekét egy IIS-en futtatott és .NET 6 Core alatt írt C# Web API adja, mely az [api.torpedo.ml] címen keresztül érni el. Ezt és a program logikáját [Tatár Mátyás Bence] írta és dolgozta ki. Az adatokat az API statikus egy nagy statikus változóban tartja, amely jelenlegi a tesztelési állapot során, a https://api.torpedo.ml/api/GameCreate úton lehet lekérdezni a GET metódus segítségével. Egyéb elérési útja többé kevésbé részletesen le vannak írva, egy [postman projekt exportban][postman-export].

## Folyamatábra:
### A Főoldal (index.html)
![](./Folyamatabra/Indulas.png "A Főoldal (index.html)")

**A program teljes folyamatábrája [itt][folyamatabra] található, a** `N3uT0rp3d0L1nk@` **jelszó megadása után.**


[folyamatabra]:https://njitneu-my.sharepoint.com/:u:/g/personal/tatar_matyas_bence_njit_hu/EcPcQVb1jqtIrSCaDylYoOwBuEtZcfDP54gJR4YaPS98yg?e=3yecgr
[api.torpedo.ml]:https://api.torpedo.ml/api/GameCreate
[postman-export]:https://github.com/tatarmb4s/Multi-Torpedo-2022/blob/main/API/TorpedoAPI/TorpedoAPIv001/bin/Release/V003/Torpedo%20API%20v003.postman_collection.json

# FrontEnd
> Ennek ma éjfélre legkésöbb fel kell lerülnie, de [Mezei Levente] nem hajlandó megcsinálni

# Dokumentáció

A Dokumentációt, és a szabályzatot [Szabó Dániel] írta.

[Szabó Dániel]:https://github.com/Gold-dt
[Mezei Levente]:[https://github.com/envagyoklevi]
[Tatár Mátyás Bence]:https://github.com/tatarmb4s