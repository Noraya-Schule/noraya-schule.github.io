// Four sequential chronicles; victories unlock them globally for every people.
const EXTRA_CAMPAIGNS=[
  {
    "id": "frost",
    "icon": "❄️",
    "name": "Der Winter ohne Morgen",
    "tier": 2,
    "requires": [
      "crown",
      "rift"
    ],
    "text": "Nach dem Weltensturm friert die Zeit ein. Befreie den Norden, bevor sein letzter Morgen erlischt.",
    "paths": [
      "Laternenweg",
      "Gletscherbruch"
    ],
    "chapters": [
      "Die gefrorene Stunde",
      "Laternen im Schnee",
      "Das Dorf ohne Stimmen",
      "Wächter des Eispasses",
      "Unter dem Gletscher",
      "Die gestohlene Sonne",
      "Spuren im Spiegel",
      "Die Uhr aus Eis",
      "Das letzte Tauwasser",
      "Der weiße Hof",
      "Eine Minute Hoffnung",
      "Der erste Morgen"
    ],
    "story": [
      "Alle Uhren bleiben bei Sonnenaufgang stehen.",
      "Eine Laterne brennt ohne Öl – ihr Licht erinnert sich an Wärme.",
      "Die Bewohner sind im selben Atemzug gefangen.",
      "Der Eiswächter hält eine Straße offen, die niemand betreten darf.",
      "Unter dem Gletscher pocht etwas Lebendiges.",
      "Ein Splitter des Sonnenlichts liegt in einer verschlossenen Hand.",
      "Jeder Spiegel zeigt einen anderen verlorenen Winter.",
      "Die Uhr aus Eis zählt die Leben, die sie bewahrt.",
      "Für die letzte Quelle bleibt nur ein einziger Becher.",
      "Die Winterkönigin bittet dich, ihre Welt nicht zu zerstören.",
      "Ein Kind im Eis bewegt zum ersten Mal die Finger.",
      "Du musst den Winter lösen, ohne seine Gefangenen zu verlieren."
    ],
    "quotes": [
      "Ein stiller Morgen ist noch kein Frieden. Alle Uhren bleiben bei Sonnenaufgang stehen.",
      "Ein stiller Morgen ist noch kein Frieden. Eine Laterne brennt ohne Öl – ihr Licht erinnert sich an Wärme.",
      "Ein stiller Morgen ist noch kein Frieden. Die Bewohner sind im selben Atemzug gefangen.",
      "Tragt das Licht weiter; es gehört allen. Der Eiswächter hält eine Straße offen, die niemand betreten darf.",
      "Tragt das Licht weiter; es gehört allen. Unter dem Gletscher pocht etwas Lebendiges.",
      "Tragt das Licht weiter; es gehört allen. Ein Splitter des Sonnenlichts liegt in einer verschlossenen Hand.",
      "Wir lassen niemanden im Eis zurück. Jeder Spiegel zeigt einen anderen verlorenen Winter.",
      "Wir lassen niemanden im Eis zurück. Die Uhr aus Eis zählt die Leben, die sie bewahrt.",
      "Wir lassen niemanden im Eis zurück. Für die letzte Quelle bleibt nur ein einziger Becher.",
      "Heute retten wir die Zeit, die noch kommen kann. Die Winterkönigin bittet dich, ihre Welt nicht zu zerstören.",
      "Heute retten wir die Zeit, die noch kommen kann. Ein Kind im Eis bewegt zum ersten Mal die Finger.",
      "Heute retten wir die Zeit, die noch kommen kann. Du musst den Winter lösen, ohne seine Gefangenen zu verlieren."
    ],
    "arcs": {
      "humans": [
        "Die Winterkönigin hielt einst eine Lawine an, um ihr Volk zu retten. Ihr Zauber wuchs weiter und verschlang schließlich jeden neuen Morgen. Ihr folgt Laternen, die von den Eingeschlossenen träumen. Deine Gesandten lassen die Städte Vorräte und Zufluchtsorte teilen. Zum ersten Mal wird ein gemeinsamer Beschluss schneller gefasst als ein Krieg erklärt.",
        "Unter dem Gletscher entdeckt ihr einen Sonnenkern. Er kann das Eis lösen, aber ein rasches Erwachen würde die angehaltene Lawine zurückbringen. Ihr sucht sichere Wege für die Gefangenen. Eine junge Hauptfrau fragt, wie viele Verluste der Rat erlauben würde. Du antwortest, dass heute nicht der Rat entscheidet, wen ihr zurückholt.",
        "Die Uhr aus Eis bewahrt für jeden Bewohner einen Herzschlag. Ihre Wächter halten euch für Plünderer. Ihr tragt die Herzschläge durch den Pass, während hinter euch die ersten Mauern tauen. Die Stadtbanner tragen Listen der Geretteten. Aus den Listen wird ein Vertrag, der Schutz an keine Herkunft mehr bindet.",
        "Die Königin muss ihren Zauber loslassen. Eure Truppe hält den Hof gegen die entfesselten Frostwächter, bis der letzte Gefangene die Straße erreicht. Der Sieg bedeutet einen Morgen, den niemand allein besitzen darf. Die freien Städte entsenden keine Königin, sondern vier gleichberechtigte Zeugen. Dein Banner kämpft für ihre gemeinsame Entscheidung."
      ],
      "elves": [
        "Die Winterkönigin hielt einst eine Lawine an, um ihr Volk zu retten. Ihr Zauber wuchs weiter und verschlang schließlich jeden neuen Morgen. Ihr folgt Laternen, die von den Eingeschlossenen träumen. Deine Hüter lesen die Spuren in Wurzeln und Wasser. Der Wald kennt keine Grenze zwischen dem Schicksal eurer Heimat und dem der Fremden.",
        "Unter dem Gletscher entdeckt ihr einen Sonnenkern. Er kann das Eis lösen, aber ein rasches Erwachen würde die angehaltene Lawine zurückbringen. Ihr sucht sichere Wege für die Gefangenen. Eine Druidin gibt ihren letzten Heimatsamen einem fremden Kind. Die Hüter erkennen, dass Bewahren manchmal bedeutet, etwas fortzugeben.",
        "Die Uhr aus Eis bewahrt für jeden Bewohner einen Herzschlag. Ihre Wächter halten euch für Plünderer. Ihr tragt die Herzschläge durch den Pass, während hinter euch die ersten Mauern tauen. Die Waldhöfe schicken Boten durch verwundete Pfade. Jede gerettete Geschichte wird in die Rinde eines jungen Baumes gesungen.",
        "Die Königin muss ihren Zauber loslassen. Eure Truppe hält den Hof gegen die entfesselten Frostwächter, bis der letzte Gefangene die Straße erreicht. Der Sieg bedeutet einen Morgen, den niemand allein besitzen darf. Dein Banner trägt einen lebenden Zweig an die letzte Schwelle. Er soll dort wachsen, wo heute noch niemand einen Morgen erwartet."
      ],
      "orcs": [
        "Die Winterkönigin hielt einst eine Lawine an, um ihr Volk zu retten. Ihr Zauber wuchs weiter und verschlang schließlich jeden neuen Morgen. Ihr folgt Laternen, die von den Eingeschlossenen träumen. Die Clans teilen ihre Feuer mit den Flüchtenden. Ein alter Rivale trägt den Verwundeten deines Stammes über den Pass, ohne einen Preis zu nennen.",
        "Unter dem Gletscher entdeckt ihr einen Sonnenkern. Er kann das Eis lösen, aber ein rasches Erwachen würde die angehaltene Lawine zurückbringen. Ihr sucht sichere Wege für die Gefangenen. Der Kriegstrommler bricht den Siegesrhythmus ab und schlägt den Takt für einen Rückzug. Stärke zeigt sich darin, dass ihr gemeinsam zurückkehrt.",
        "Die Uhr aus Eis bewahrt für jeden Bewohner einen Herzschlag. Ihre Wächter halten euch für Plünderer. Ihr tragt die Herzschläge durch den Pass, während hinter euch die ersten Mauern tauen. Jeder Clan gibt ein Zeichen seines Stolzes ab, damit Fremde einen sicheren Weg erkennen. Aus Trophäen werden Wegweiser.",
        "Die Königin muss ihren Zauber loslassen. Eure Truppe hält den Hof gegen die entfesselten Frostwächter, bis der letzte Gefangene die Straße erreicht. Der Sieg bedeutet einen Morgen, den niemand allein besitzen darf. Vor dem letzten Kampf sprechen die Häuptlinge keinen Namen zuerst. Dein Banner steht für einen Bund, den kein einzelner Sieg begründen könnte."
      ],
      "undead": [
        "Die Winterkönigin hielt einst eine Lawine an, um ihr Volk zu retten. Ihr Zauber wuchs weiter und verschlang schließlich jeden neuen Morgen. Ihr folgt Laternen, die von den Eingeschlossenen träumen. Die Ahnen hören jene Stimmen, die den Lebenden entgehen. Deine Truppe bewahrt ihre Namen und sucht die Menschen, denen ihre Worte gelten.",
        "Unter dem Gletscher entdeckt ihr einen Sonnenkern. Er kann das Eis lösen, aber ein rasches Erwachen würde die angehaltene Lawine zurückbringen. Ihr sucht sichere Wege für die Gefangenen. Eine Grabpriesterin erkennt unter den Gefangenen jemanden, den sie einst bestattete. Sie entscheidet sich für dessen Freiheit, nicht für ihre Gewissheit.",
        "Die Uhr aus Eis bewahrt für jeden Bewohner einen Herzschlag. Ihre Wächter halten euch für Plünderer. Ihr tragt die Herzschläge durch den Pass, während hinter euch die ersten Mauern tauen. In der Nekropole werden die Tore auch für lebende Fremde geöffnet. Erinnerung wird zur Verantwortung für Menschen, deren Geschichte erst beginnt.",
        "Die Königin muss ihren Zauber loslassen. Eure Truppe hält den Hof gegen die entfesselten Frostwächter, bis der letzte Gefangene die Straße erreicht. Der Sieg bedeutet einen Morgen, den niemand allein besitzen darf. Die Ahnen reichen ihre Lichter an die nächste Generation weiter. Dein Banner kämpft darum, dass Erinnerung schützt, ohne die Zukunft festzuhalten."
      ]
    },
    "epilogues": {
      "humans": "Die Städte bauen Herbergen entlang des Tauwegs. Kein Grenzwächter fragt die Befreiten nach einem alten Siegel.",
      "elves": "Unter dem Gletscher blüht der erste Hain. Die Winterkönigin pflanzt selbst den letzten Baum.",
      "orcs": "Die Clans nennen den neuen Pass Heimkehr. Sein größtes Denkmal ist ein Feuer, das für Fremde brennt.",
      "undead": "Die Namen der im Eis Wartenden werden aus dem Totenbuch gestrichen. In der Nekropole beginnt ein Fest der Lebenden."
    }
  },
  {
    "id": "embers",
    "icon": "🌋",
    "name": "Die Asche der Eidbrecher",
    "tier": 3,
    "requires": [
      "frost"
    ],
    "text": "Das Tauwasser weckt eine uralte Schmiede. Eine Armee aus gebrochenen Schwüren fordert ihren Preis.",
    "paths": [
      "Aschestraße",
      "Glutstollen"
    ],
    "chapters": [
      "Rauch hinter dem Pass",
      "Der verbrannte Vertrag",
      "Feuer unter Rotfurt",
      "Der Pförtner der Esse",
      "Ketten aus Worten",
      "Die verschwundenen Schmiede",
      "Ein Eid für vier Banner",
      "Der eiserne Richter",
      "Die letzte Schuld",
      "Flammen ohne Wärme",
      "Vor dem Amboss",
      "Ein freier Schwur"
    ],
    "story": [
      "Aus dem aufgetauten Gebirge steigt schwarzer Rauch.",
      "Ein alter Vertrag brennt, doch seine Schrift bleibt bestehen.",
      "Jeder gebrochene Schwur nährt die Feuer unter der Stadt.",
      "Der Pförtner verlangt einen Namen als Pfand.",
      "Ketten sprechen mit den Stimmen ihrer Gefangenen.",
      "Die Schmiede sind zu Werkzeugen ihrer eigenen Arbeit geworden.",
      "Vier Banner streiten darüber, wer zuerst sein Wort brach.",
      "Der Richter kennt jede Schuld, aber keine Vergebung.",
      "Du findest den ersten Vertrag: Er wurde nie freiwillig geschlossen.",
      "Das Feuer verbrennt nun auch gehaltene Versprechen.",
      "Nur ein freiwillig gelöster Eid kann den Amboss brechen.",
      "Die Schmiede wartet auf ein Wort, das niemand erzwingen kann."
    ],
    "quotes": [
      "Ein Versprechen unter Zwang ist eine Kette. Aus dem aufgetauten Gebirge steigt schwarzer Rauch.",
      "Ein Versprechen unter Zwang ist eine Kette. Ein alter Vertrag brennt, doch seine Schrift bleibt bestehen.",
      "Ein Versprechen unter Zwang ist eine Kette. Jeder gebrochene Schwur nährt die Feuer unter der Stadt.",
      "Wir schulden den Gefangenen einen Weg hinaus. Der Pförtner verlangt einen Namen als Pfand.",
      "Wir schulden den Gefangenen einen Weg hinaus. Ketten sprechen mit den Stimmen ihrer Gefangenen.",
      "Wir schulden den Gefangenen einen Weg hinaus. Die Schmiede sind zu Werkzeugen ihrer eigenen Arbeit geworden.",
      "Vertrauen lässt sich nicht auf einen Amboss zwingen. Vier Banner streiten darüber, wer zuerst sein Wort brach.",
      "Vertrauen lässt sich nicht auf einen Amboss zwingen. Der Richter kennt jede Schuld, aber keine Vergebung.",
      "Vertrauen lässt sich nicht auf einen Amboss zwingen. Du findest den ersten Vertrag: Er wurde nie freiwillig geschlossen.",
      "Unser Wort gilt, weil wir es frei geben. Das Feuer verbrennt nun auch gehaltene Versprechen.",
      "Unser Wort gilt, weil wir es frei geben. Nur ein freiwillig gelöster Eid kann den Amboss brechen.",
      "Unser Wort gilt, weil wir es frei geben. Die Schmiede wartet auf ein Wort, das niemand erzwingen kann."
    ],
    "arcs": {
      "humans": [
        "Die Schmiede von Rotfurt verwandelte einst Schwüre in Schutz für die Städte. Ihr Richter hat jeden Vertragsbruch gesammelt und schmiedet daraus eine Armee. Nach dem Tauwetter kann sie die Pässe verlassen. Deine Gesandten lassen die Städte Vorräte und Zufluchtsorte teilen. Zum ersten Mal wird ein gemeinsamer Beschluss schneller gefasst als ein Krieg erklärt.",
        "Ihr findet Arbeiter, die durch ererbte Versprechen an die Esse gebunden sind. Der Richter nennt ihre Flucht Verrat. Ihr zerschlagt ihre Ketten und verliert damit den einzigen sicheren Weg durch die Feuer. Eine junge Hauptfrau fragt, wie viele Verluste der Rat erlauben würde. Du antwortest, dass heute nicht der Rat entscheidet, wen ihr zurückholt.",
        "Im Archiv der Schmiede liegt der erste Eid: ein erpresstes Versprechen. Der Richter weigert sich, zwischen Treue und Zwang zu unterscheiden. Die vier Banner beschließen, einander ohne Pfand zu vertrauen. Die Stadtbanner tragen Listen der Geretteten. Aus den Listen wird ein Vertrag, der Schutz an keine Herkunft mehr bindet.",
        "Am Amboss bietet der Richter Sicherheit gegen ewigen Gehorsam. Eure Truppe hält den Ansturm aus geschmiedeten Eiden auf, während die Gefangenen ihre Namen zurückfordern. Ein freies Versprechen beendet das Feuer. Die freien Städte entsenden keine Königin, sondern vier gleichberechtigte Zeugen. Dein Banner kämpft für ihre gemeinsame Entscheidung."
      ],
      "elves": [
        "Die Schmiede von Rotfurt verwandelte einst Schwüre in Schutz für die Städte. Ihr Richter hat jeden Vertragsbruch gesammelt und schmiedet daraus eine Armee. Nach dem Tauwetter kann sie die Pässe verlassen. Deine Hüter lesen die Spuren in Wurzeln und Wasser. Der Wald kennt keine Grenze zwischen dem Schicksal eurer Heimat und dem der Fremden.",
        "Ihr findet Arbeiter, die durch ererbte Versprechen an die Esse gebunden sind. Der Richter nennt ihre Flucht Verrat. Ihr zerschlagt ihre Ketten und verliert damit den einzigen sicheren Weg durch die Feuer. Eine Druidin gibt ihren letzten Heimatsamen einem fremden Kind. Die Hüter erkennen, dass Bewahren manchmal bedeutet, etwas fortzugeben.",
        "Im Archiv der Schmiede liegt der erste Eid: ein erpresstes Versprechen. Der Richter weigert sich, zwischen Treue und Zwang zu unterscheiden. Die vier Banner beschließen, einander ohne Pfand zu vertrauen. Die Waldhöfe schicken Boten durch verwundete Pfade. Jede gerettete Geschichte wird in die Rinde eines jungen Baumes gesungen.",
        "Am Amboss bietet der Richter Sicherheit gegen ewigen Gehorsam. Eure Truppe hält den Ansturm aus geschmiedeten Eiden auf, während die Gefangenen ihre Namen zurückfordern. Ein freies Versprechen beendet das Feuer. Dein Banner trägt einen lebenden Zweig an die letzte Schwelle. Er soll dort wachsen, wo heute noch niemand einen Morgen erwartet."
      ],
      "orcs": [
        "Die Schmiede von Rotfurt verwandelte einst Schwüre in Schutz für die Städte. Ihr Richter hat jeden Vertragsbruch gesammelt und schmiedet daraus eine Armee. Nach dem Tauwetter kann sie die Pässe verlassen. Die Clans teilen ihre Feuer mit den Flüchtenden. Ein alter Rivale trägt den Verwundeten deines Stammes über den Pass, ohne einen Preis zu nennen.",
        "Ihr findet Arbeiter, die durch ererbte Versprechen an die Esse gebunden sind. Der Richter nennt ihre Flucht Verrat. Ihr zerschlagt ihre Ketten und verliert damit den einzigen sicheren Weg durch die Feuer. Der Kriegstrommler bricht den Siegesrhythmus ab und schlägt den Takt für einen Rückzug. Stärke zeigt sich darin, dass ihr gemeinsam zurückkehrt.",
        "Im Archiv der Schmiede liegt der erste Eid: ein erpresstes Versprechen. Der Richter weigert sich, zwischen Treue und Zwang zu unterscheiden. Die vier Banner beschließen, einander ohne Pfand zu vertrauen. Jeder Clan gibt ein Zeichen seines Stolzes ab, damit Fremde einen sicheren Weg erkennen. Aus Trophäen werden Wegweiser.",
        "Am Amboss bietet der Richter Sicherheit gegen ewigen Gehorsam. Eure Truppe hält den Ansturm aus geschmiedeten Eiden auf, während die Gefangenen ihre Namen zurückfordern. Ein freies Versprechen beendet das Feuer. Vor dem letzten Kampf sprechen die Häuptlinge keinen Namen zuerst. Dein Banner steht für einen Bund, den kein einzelner Sieg begründen könnte."
      ],
      "undead": [
        "Die Schmiede von Rotfurt verwandelte einst Schwüre in Schutz für die Städte. Ihr Richter hat jeden Vertragsbruch gesammelt und schmiedet daraus eine Armee. Nach dem Tauwetter kann sie die Pässe verlassen. Die Ahnen hören jene Stimmen, die den Lebenden entgehen. Deine Truppe bewahrt ihre Namen und sucht die Menschen, denen ihre Worte gelten.",
        "Ihr findet Arbeiter, die durch ererbte Versprechen an die Esse gebunden sind. Der Richter nennt ihre Flucht Verrat. Ihr zerschlagt ihre Ketten und verliert damit den einzigen sicheren Weg durch die Feuer. Eine Grabpriesterin erkennt unter den Gefangenen jemanden, den sie einst bestattete. Sie entscheidet sich für dessen Freiheit, nicht für ihre Gewissheit.",
        "Im Archiv der Schmiede liegt der erste Eid: ein erpresstes Versprechen. Der Richter weigert sich, zwischen Treue und Zwang zu unterscheiden. Die vier Banner beschließen, einander ohne Pfand zu vertrauen. In der Nekropole werden die Tore auch für lebende Fremde geöffnet. Erinnerung wird zur Verantwortung für Menschen, deren Geschichte erst beginnt.",
        "Am Amboss bietet der Richter Sicherheit gegen ewigen Gehorsam. Eure Truppe hält den Ansturm aus geschmiedeten Eiden auf, während die Gefangenen ihre Namen zurückfordern. Ein freies Versprechen beendet das Feuer. Die Ahnen reichen ihre Lichter an die nächste Generation weiter. Dein Banner kämpft darum, dass Erinnerung schützt, ohne die Zukunft festzuhalten."
      ]
    },
    "epilogues": {
      "humans": "Die Schmiede fertigt Brücken statt Eidketten. Jeder Vertrag trägt nun eine Zeile: Niemand erbt die Schuld eines anderen.",
      "elves": "Aus den kalten Essen werden Gewächshäuser. Die Hüter schenken den Befreiten Samen, ohne ein Versprechen zu verlangen.",
      "orcs": "Die Clans werfen ihre Pfandketten in den erkalteten Ofen. Ihr neuer Bund beginnt mit einem freiwilligen Handschlag.",
      "undead": "Die Ahnen lösen die letzten ererbten Schwüre. Ihre Nachfahren dürfen eigene Wege wählen, ohne die Toten zu verraten."
    }
  },
  {
    "id": "depths",
    "icon": "🌊",
    "name": "Das Meer der verlorenen Namen",
    "tier": 4,
    "requires": [
      "embers"
    ],
    "text": "Unter der erkalteten Schmiede öffnet sich ein Meer aus Erinnerungen. Seine Flut löscht ganze Völker aus der Geschichte.",
    "paths": [
      "Ankerpfad",
      "Gezeitenkluft"
    ],
    "chapters": [
      "Wasser in der Esse",
      "Die namenlose Küste",
      "Boote ohne Schatten",
      "Der Hüter der Schleuse",
      "Stimmen unter Wasser",
      "Die versunkene Bibliothek",
      "Ein Hafen für Fremde",
      "Der Sammler der Namen",
      "Die Flut im Gedächtnis",
      "Vier letzte Geschichten",
      "Das Tor am Meeresgrund",
      "Was von uns bleibt"
    ],
    "story": [
      "Salzwasser steigt aus der erkalteten Esse.",
      "Auf den Karten verschwindet der Name der Küste.",
      "Ein Boot bringt Menschen, die ihre Heimat nicht mehr kennen.",
      "Der Schleusenwächter erkennt nur jene, die er bereits vergessen hat.",
      "Unter dem Wasser rufen Stimmen nach ihren Familien.",
      "Bücher treiben aufwärts, ihre Seiten sind leer.",
      "Euer Lager wird zum Hafen der Namenlosen.",
      "Der Sammler bietet dir die Vergangenheit eines ganzen Volkes.",
      "Die Flut erreicht eure eigenen Erinnerungen.",
      "Jedes Banner bewahrt die Geschichte eines anderen.",
      "Am Meeresgrund liegt das erste vergessene Versprechen.",
      "Ihr entscheidet, wer die verlorenen Geschichten weiterträgt."
    ],
    "quotes": [
      "Sprich ihren Namen. Dann ist sie noch nicht verloren. Salzwasser steigt aus der erkalteten Esse.",
      "Sprich ihren Namen. Dann ist sie noch nicht verloren. Auf den Karten verschwindet der Name der Küste.",
      "Sprich ihren Namen. Dann ist sie noch nicht verloren. Ein Boot bringt Menschen, die ihre Heimat nicht mehr kennen.",
      "Eine Geschichte braucht jemanden, der zuhört. Der Schleusenwächter erkennt nur jene, die er bereits vergessen hat.",
      "Eine Geschichte braucht jemanden, der zuhört. Unter dem Wasser rufen Stimmen nach ihren Familien.",
      "Eine Geschichte braucht jemanden, der zuhört. Bücher treiben aufwärts, ihre Seiten sind leer.",
      "Heute bewahrt jedes Banner das Gedächtnis eines anderen. Euer Lager wird zum Hafen der Namenlosen.",
      "Heute bewahrt jedes Banner das Gedächtnis eines anderen. Der Sammler bietet dir die Vergangenheit eines ganzen Volkes.",
      "Heute bewahrt jedes Banner das Gedächtnis eines anderen. Die Flut erreicht eure eigenen Erinnerungen.",
      "Wir gehen gemeinsam zurück an die Oberfläche. Jedes Banner bewahrt die Geschichte eines anderen.",
      "Wir gehen gemeinsam zurück an die Oberfläche. Am Meeresgrund liegt das erste vergessene Versprechen.",
      "Wir gehen gemeinsam zurück an die Oberfläche. Ihr entscheidet, wer die verlorenen Geschichten weiterträgt."
    ],
    "arcs": {
      "humans": [
        "Unter der Schmiede lag ein Meer, in dem vergessene Namen Zuflucht fanden. Mit dem Ende der Eidketten brachen seine Dämme. Seine Flut nimmt nicht Leben, sondern die Erinnerung daran, dass jemand je gelebt hat. Deine Gesandten lassen die Städte Vorräte und Zufluchtsorte teilen. Zum ersten Mal wird ein gemeinsamer Beschluss schneller gefasst als ein Krieg erklärt.",
        "Die versunkene Bibliothek enthält die Geschichten jener, die niemand mehr nennt. Der Sammler will sie bewahren, indem er alle Lebenden ebenfalls vergisst. Ihr rettet Bücher und Menschen, während eure eigenen Namen verblassen. Eine junge Hauptfrau fragt, wie viele Verluste der Rat erlauben würde. Du antwortest, dass heute nicht der Rat entscheidet, wen ihr zurückholt.",
        "Im Hafen erzählen Menschen, Hüter, Clans und Ahnen einander ihre Geschichten. Wer die Erinnerung eines anderen trägt, widersteht der Flut. Der Sammler versucht, eure Banner voneinander zu trennen. Die Stadtbanner tragen Listen der Geretteten. Aus den Listen wird ein Vertrag, der Schutz an keine Herkunft mehr bindet.",
        "Am Meeresgrund könntet ihr alle verlorenen Namen gegen eure eigene Geschichte eintauschen. Stattdessen öffnet ihr vier Wege zur Oberfläche. Eure Truppe hält die Schleusen, bis jede Geschichte jemanden findet, der sie weiterträgt. Die freien Städte entsenden keine Königin, sondern vier gleichberechtigte Zeugen. Dein Banner kämpft für ihre gemeinsame Entscheidung."
      ],
      "elves": [
        "Unter der Schmiede lag ein Meer, in dem vergessene Namen Zuflucht fanden. Mit dem Ende der Eidketten brachen seine Dämme. Seine Flut nimmt nicht Leben, sondern die Erinnerung daran, dass jemand je gelebt hat. Deine Hüter lesen die Spuren in Wurzeln und Wasser. Der Wald kennt keine Grenze zwischen dem Schicksal eurer Heimat und dem der Fremden.",
        "Die versunkene Bibliothek enthält die Geschichten jener, die niemand mehr nennt. Der Sammler will sie bewahren, indem er alle Lebenden ebenfalls vergisst. Ihr rettet Bücher und Menschen, während eure eigenen Namen verblassen. Eine Druidin gibt ihren letzten Heimatsamen einem fremden Kind. Die Hüter erkennen, dass Bewahren manchmal bedeutet, etwas fortzugeben.",
        "Im Hafen erzählen Menschen, Hüter, Clans und Ahnen einander ihre Geschichten. Wer die Erinnerung eines anderen trägt, widersteht der Flut. Der Sammler versucht, eure Banner voneinander zu trennen. Die Waldhöfe schicken Boten durch verwundete Pfade. Jede gerettete Geschichte wird in die Rinde eines jungen Baumes gesungen.",
        "Am Meeresgrund könntet ihr alle verlorenen Namen gegen eure eigene Geschichte eintauschen. Stattdessen öffnet ihr vier Wege zur Oberfläche. Eure Truppe hält die Schleusen, bis jede Geschichte jemanden findet, der sie weiterträgt. Dein Banner trägt einen lebenden Zweig an die letzte Schwelle. Er soll dort wachsen, wo heute noch niemand einen Morgen erwartet."
      ],
      "orcs": [
        "Unter der Schmiede lag ein Meer, in dem vergessene Namen Zuflucht fanden. Mit dem Ende der Eidketten brachen seine Dämme. Seine Flut nimmt nicht Leben, sondern die Erinnerung daran, dass jemand je gelebt hat. Die Clans teilen ihre Feuer mit den Flüchtenden. Ein alter Rivale trägt den Verwundeten deines Stammes über den Pass, ohne einen Preis zu nennen.",
        "Die versunkene Bibliothek enthält die Geschichten jener, die niemand mehr nennt. Der Sammler will sie bewahren, indem er alle Lebenden ebenfalls vergisst. Ihr rettet Bücher und Menschen, während eure eigenen Namen verblassen. Der Kriegstrommler bricht den Siegesrhythmus ab und schlägt den Takt für einen Rückzug. Stärke zeigt sich darin, dass ihr gemeinsam zurückkehrt.",
        "Im Hafen erzählen Menschen, Hüter, Clans und Ahnen einander ihre Geschichten. Wer die Erinnerung eines anderen trägt, widersteht der Flut. Der Sammler versucht, eure Banner voneinander zu trennen. Jeder Clan gibt ein Zeichen seines Stolzes ab, damit Fremde einen sicheren Weg erkennen. Aus Trophäen werden Wegweiser.",
        "Am Meeresgrund könntet ihr alle verlorenen Namen gegen eure eigene Geschichte eintauschen. Stattdessen öffnet ihr vier Wege zur Oberfläche. Eure Truppe hält die Schleusen, bis jede Geschichte jemanden findet, der sie weiterträgt. Vor dem letzten Kampf sprechen die Häuptlinge keinen Namen zuerst. Dein Banner steht für einen Bund, den kein einzelner Sieg begründen könnte."
      ],
      "undead": [
        "Unter der Schmiede lag ein Meer, in dem vergessene Namen Zuflucht fanden. Mit dem Ende der Eidketten brachen seine Dämme. Seine Flut nimmt nicht Leben, sondern die Erinnerung daran, dass jemand je gelebt hat. Die Ahnen hören jene Stimmen, die den Lebenden entgehen. Deine Truppe bewahrt ihre Namen und sucht die Menschen, denen ihre Worte gelten.",
        "Die versunkene Bibliothek enthält die Geschichten jener, die niemand mehr nennt. Der Sammler will sie bewahren, indem er alle Lebenden ebenfalls vergisst. Ihr rettet Bücher und Menschen, während eure eigenen Namen verblassen. Eine Grabpriesterin erkennt unter den Gefangenen jemanden, den sie einst bestattete. Sie entscheidet sich für dessen Freiheit, nicht für ihre Gewissheit.",
        "Im Hafen erzählen Menschen, Hüter, Clans und Ahnen einander ihre Geschichten. Wer die Erinnerung eines anderen trägt, widersteht der Flut. Der Sammler versucht, eure Banner voneinander zu trennen. In der Nekropole werden die Tore auch für lebende Fremde geöffnet. Erinnerung wird zur Verantwortung für Menschen, deren Geschichte erst beginnt.",
        "Am Meeresgrund könntet ihr alle verlorenen Namen gegen eure eigene Geschichte eintauschen. Stattdessen öffnet ihr vier Wege zur Oberfläche. Eure Truppe hält die Schleusen, bis jede Geschichte jemanden findet, der sie weiterträgt. Die Ahnen reichen ihre Lichter an die nächste Generation weiter. Dein Banner kämpft darum, dass Erinnerung schützt, ohne die Zukunft festzuhalten."
      ]
    },
    "epilogues": {
      "humans": "Jede Stadt richtet ein Haus der Geschichten ein. Auch Menschen ohne Herkunft erhalten dort einen Namen und ein Zuhause.",
      "elves": "Der Wald bewahrt die geretteten Stimmen in einem Hain am Meer. Seine Blätter erzählen in den Sprachen aller Völker.",
      "orcs": "Die Trommler lernen die Lieder fremder Clans und Städte. Kein Sieg wird mehr besungen, ohne auch die Geretteten zu nennen.",
      "undead": "In der Nekropole brennen neue Lichter für Menschen, die niemand mehr kannte. Ihre Namen gehören wieder zur Welt."
    }
  },
  {
    "id": "eclipse",
    "icon": "🌑",
    "name": "Die letzte Dämmerung",
    "tier": 5,
    "requires": [
      "depths"
    ],
    "text": "Zeit, Schwur und Erinnerung geraten aus dem Gleichgewicht. Jenseits der letzten Sonne wartet der Ursprung aller Risse.",
    "paths": [
      "Sternenbrücke",
      "Schattenbahn"
    ],
    "chapters": [
      "Vier Zeichen am Himmel",
      "Die fehlende Stunde",
      "Sterne aus Asche",
      "Der Wächter der Schwelle",
      "Ein Himmel ohne Namen",
      "Die zerbrochene Waage",
      "Das Lager zwischen Welten",
      "Die drei letzten Zeugen",
      "Der Ursprung des Risses",
      "Kein Banner allein",
      "Vor dem letzten Licht",
      "Der Morgen aller Völker"
    ],
    "story": [
      "Vier gerettete Kräfte zeichnen einen Riss um die Sonne.",
      "Eine Stunde fehlt in jeder Erinnerung an den letzten Tag.",
      "Asche fällt nach oben und verdeckt die Sterne.",
      "Der Schwellenwächter trägt die Narben eurer vergangenen Siege.",
      "Am Himmel verschwinden die Namen der Sternbilder.",
      "Die Waage verlangt eine Welt, um die anderen zu retten.",
      "Zwischen den Welten brennt euer letztes Lagerfeuer.",
      "Drei Zeugen fordern Zeit, Treue und Erinnerung zurück.",
      "Der Ursprung hält jede Welt in einer endlosen Wiederholung.",
      "Vier Banner müssen gleichzeitig vier Wege halten.",
      "Das letzte Licht wartet auf eure gemeinsame Entscheidung.",
      "Ein Morgen für alle Welten muss gegen die Nacht verteidigt werden."
    ],
    "quotes": [
      "Ein vollkommener Stillstand ist kein Leben. Vier gerettete Kräfte zeichnen einen Riss um die Sonne.",
      "Ein vollkommener Stillstand ist kein Leben. Eine Stunde fehlt in jeder Erinnerung an den letzten Tag.",
      "Ein vollkommener Stillstand ist kein Leben. Asche fällt nach oben und verdeckt die Sterne.",
      "Wir opfern keine fremde Welt für unsere eigene. Der Schwellenwächter trägt die Narben eurer vergangenen Siege.",
      "Wir opfern keine fremde Welt für unsere eigene. Am Himmel verschwinden die Namen der Sternbilder.",
      "Wir opfern keine fremde Welt für unsere eigene. Die Waage verlangt eine Welt, um die anderen zu retten.",
      "Alles, was wir gerettet haben, hält uns jetzt zusammen. Zwischen den Welten brennt euer letztes Lagerfeuer.",
      "Alles, was wir gerettet haben, hält uns jetzt zusammen. Drei Zeugen fordern Zeit, Treue und Erinnerung zurück.",
      "Alles, was wir gerettet haben, hält uns jetzt zusammen. Der Ursprung hält jede Welt in einer endlosen Wiederholung.",
      "Der nächste Morgen darf uns überraschen. Vier Banner müssen gleichzeitig vier Wege halten.",
      "Der nächste Morgen darf uns überraschen. Das letzte Licht wartet auf eure gemeinsame Entscheidung.",
      "Der nächste Morgen darf uns überraschen. Ein Morgen für alle Welten muss gegen die Nacht verteidigt werden."
    ],
    "arcs": {
      "humans": [
        "Die befreite Zeit, die gelösten Eide und die geretteten Namen ziehen an derselben Naht der Welt. Am Rand der Sonne erscheint der Ursprung: eine uralte Macht, die jede Veränderung durch eine neue Schleife rückgängig macht. Deine Gesandten lassen die Städte Vorräte und Zufluchtsorte teilen. Zum ersten Mal wird ein gemeinsamer Beschluss schneller gefasst als ein Krieg erklärt.",
        "Ihr findet Welten, die in derselben letzten Minute gefangen sind. Der Ursprung bietet an, eure Heimat zu erhalten, wenn ihr eine andere opfert. Zum ersten Mal sehen alle vier Banner den Preis eines Sieges auf Kosten Fremder. Eine junge Hauptfrau fragt, wie viele Verluste der Rat erlauben würde. Du antwortest, dass heute nicht der Rat entscheidet, wen ihr zurückholt.",
        "Die Zeugen des Winters, der Schmiede und des Meeres prüfen euren Bund. Ihr teilt Zeit, Vertrauen und Erinnerung untereinander. Kein einzelnes Volk kann den Weg durch die Dämmerung öffnen. Die Stadtbanner tragen Listen der Geretteten. Aus den Listen wird ein Vertrag, der Schutz an keine Herkunft mehr bindet.",
        "Vor dem Ursprung könnten eure Siege einfach ungeschehen werden. Eure Truppe hält vier Wege, während die geretteten Welten sich voneinander lösen. Ihr kämpft für einen ungewissen Morgen, den keine Macht mehr zurückdrehen darf. Die freien Städte entsenden keine Königin, sondern vier gleichberechtigte Zeugen. Dein Banner kämpft für ihre gemeinsame Entscheidung."
      ],
      "elves": [
        "Die befreite Zeit, die gelösten Eide und die geretteten Namen ziehen an derselben Naht der Welt. Am Rand der Sonne erscheint der Ursprung: eine uralte Macht, die jede Veränderung durch eine neue Schleife rückgängig macht. Deine Hüter lesen die Spuren in Wurzeln und Wasser. Der Wald kennt keine Grenze zwischen dem Schicksal eurer Heimat und dem der Fremden.",
        "Ihr findet Welten, die in derselben letzten Minute gefangen sind. Der Ursprung bietet an, eure Heimat zu erhalten, wenn ihr eine andere opfert. Zum ersten Mal sehen alle vier Banner den Preis eines Sieges auf Kosten Fremder. Eine Druidin gibt ihren letzten Heimatsamen einem fremden Kind. Die Hüter erkennen, dass Bewahren manchmal bedeutet, etwas fortzugeben.",
        "Die Zeugen des Winters, der Schmiede und des Meeres prüfen euren Bund. Ihr teilt Zeit, Vertrauen und Erinnerung untereinander. Kein einzelnes Volk kann den Weg durch die Dämmerung öffnen. Die Waldhöfe schicken Boten durch verwundete Pfade. Jede gerettete Geschichte wird in die Rinde eines jungen Baumes gesungen.",
        "Vor dem Ursprung könnten eure Siege einfach ungeschehen werden. Eure Truppe hält vier Wege, während die geretteten Welten sich voneinander lösen. Ihr kämpft für einen ungewissen Morgen, den keine Macht mehr zurückdrehen darf. Dein Banner trägt einen lebenden Zweig an die letzte Schwelle. Er soll dort wachsen, wo heute noch niemand einen Morgen erwartet."
      ],
      "orcs": [
        "Die befreite Zeit, die gelösten Eide und die geretteten Namen ziehen an derselben Naht der Welt. Am Rand der Sonne erscheint der Ursprung: eine uralte Macht, die jede Veränderung durch eine neue Schleife rückgängig macht. Die Clans teilen ihre Feuer mit den Flüchtenden. Ein alter Rivale trägt den Verwundeten deines Stammes über den Pass, ohne einen Preis zu nennen.",
        "Ihr findet Welten, die in derselben letzten Minute gefangen sind. Der Ursprung bietet an, eure Heimat zu erhalten, wenn ihr eine andere opfert. Zum ersten Mal sehen alle vier Banner den Preis eines Sieges auf Kosten Fremder. Der Kriegstrommler bricht den Siegesrhythmus ab und schlägt den Takt für einen Rückzug. Stärke zeigt sich darin, dass ihr gemeinsam zurückkehrt.",
        "Die Zeugen des Winters, der Schmiede und des Meeres prüfen euren Bund. Ihr teilt Zeit, Vertrauen und Erinnerung untereinander. Kein einzelnes Volk kann den Weg durch die Dämmerung öffnen. Jeder Clan gibt ein Zeichen seines Stolzes ab, damit Fremde einen sicheren Weg erkennen. Aus Trophäen werden Wegweiser.",
        "Vor dem Ursprung könnten eure Siege einfach ungeschehen werden. Eure Truppe hält vier Wege, während die geretteten Welten sich voneinander lösen. Ihr kämpft für einen ungewissen Morgen, den keine Macht mehr zurückdrehen darf. Vor dem letzten Kampf sprechen die Häuptlinge keinen Namen zuerst. Dein Banner steht für einen Bund, den kein einzelner Sieg begründen könnte."
      ],
      "undead": [
        "Die befreite Zeit, die gelösten Eide und die geretteten Namen ziehen an derselben Naht der Welt. Am Rand der Sonne erscheint der Ursprung: eine uralte Macht, die jede Veränderung durch eine neue Schleife rückgängig macht. Die Ahnen hören jene Stimmen, die den Lebenden entgehen. Deine Truppe bewahrt ihre Namen und sucht die Menschen, denen ihre Worte gelten.",
        "Ihr findet Welten, die in derselben letzten Minute gefangen sind. Der Ursprung bietet an, eure Heimat zu erhalten, wenn ihr eine andere opfert. Zum ersten Mal sehen alle vier Banner den Preis eines Sieges auf Kosten Fremder. Eine Grabpriesterin erkennt unter den Gefangenen jemanden, den sie einst bestattete. Sie entscheidet sich für dessen Freiheit, nicht für ihre Gewissheit.",
        "Die Zeugen des Winters, der Schmiede und des Meeres prüfen euren Bund. Ihr teilt Zeit, Vertrauen und Erinnerung untereinander. Kein einzelnes Volk kann den Weg durch die Dämmerung öffnen. In der Nekropole werden die Tore auch für lebende Fremde geöffnet. Erinnerung wird zur Verantwortung für Menschen, deren Geschichte erst beginnt.",
        "Vor dem Ursprung könnten eure Siege einfach ungeschehen werden. Eure Truppe hält vier Wege, während die geretteten Welten sich voneinander lösen. Ihr kämpft für einen ungewissen Morgen, den keine Macht mehr zurückdrehen darf. Die Ahnen reichen ihre Lichter an die nächste Generation weiter. Dein Banner kämpft darum, dass Erinnerung schützt, ohne die Zukunft festzuhalten."
      ]
    },
    "epilogues": {
      "humans": "Der erste freie Morgen erreicht vier offene Stadttore. Die gemeinsame Chronik beginnt mit einer leeren Seite für jene, die nach euch kommen.",
      "elves": "Die Wurzeln der Welten finden ihren eigenen Weg. Der letzte Zweig blüht unter einer Sonne, die niemand mehr gefangen halten kann.",
      "orcs": "Zum ersten Mal gibt der Donner keinen Krieg vor. Die Clans antworten mit vier verschiedenen Rhythmen, die gemeinsam nach Heimat klingen.",
      "undead": "Die Ahnen treten aus dem Schatten der Wiederholung. Sie erinnern sich an alles – und erlauben der Zukunft, etwas Neues zu werden."
    }
  }
];
const ALL_CAMPAIGN_IDS=['crown','rift',...EXTRA_CAMPAIGNS.map(c=>c.id)];
function hasCampaignVictory(id){return ['humans','elves','orcs','undead'].some(r=>(profile.campaigns[r+':'+id]||0)>0)}
function campaignUnlocked(id,race=chosenRace||S?.race){
 const index=ALL_CAMPAIGN_IDS.indexOf(id);if(index<0)return false;if(index===0)return true;
 if(!race)return false;
 return (profile.campaigns[race+':'+id]||0)>0||(profile.campaigns[race+':'+ALL_CAMPAIGN_IDS[index-1]]||0)>0;
}
function campaignRequirement(c,race=chosenRace||S?.race){
 const index=ALL_CAMPAIGN_IDS.indexOf(c.id);return index>0?CAMPAIGNS.find(x=>x.id===ALL_CAMPAIGN_IDS[index-1]).name+' mit '+(RACES.find(r=>r.id===race)?.name||'diesem Volk')+' abschließen':'';
}
function campaignTier(id=S?.campaign||chosenCampaign){return id==='rift'?1:EXTRA_CAMPAIGNS.find(c=>c.id===id)?.tier||0}
function campaignPressure(id=S?.campaign||chosenCampaign){return Math.max(0,campaignTier(id)-1)}
function campaignDifficulty(c){const names=['Einstieg','Schwer','Veteran','Meister','Albtraum','Legende'],n=campaignPressure(c.id);if(modernJourney())return `Schwierigkeit ${campaignTier(c.id)+1}/6 · ${names[campaignTier(c.id)]} · ${campaignLength(c.id)} Kapitel · sanfter Einstieg; Gegnerwerte und Taktik steigen im Verlauf. ${campaignTier(c.id)?'Spätere Kampagnen verstärken vor allem die letzten Kapitel.':''}`;return `Schwierigkeit ${campaignTier(c.id)+1}/6 · ${names[campaignTier(c.id)]}${n?` · gegenüber Weltenrisse: +${n*10} % Gegnerleben, +${n} Angriff, +${n} Startschild`:''}`}

// Each story encounter gains a distinct approach chapter in the long expedition.
const CAMPAIGN_APPROACHES={
 crown:['Die Grenzpatrouille entdeckt verlassene Vorratswagen. Sichert die Furt vor dem brennenden Banner.','Ein umgestürzter Wachtturm versperrt den Weg. Auf der anderen Seite sammeln sich Späher.','An den äußeren Mauern Asterhalls bewachen Wachen die versiegelten Archive.','Vor dem Dornenhain prüfen wandernde Hüter euren Anspruch auf Einlass.','Die Zufahrten Rotfurts liegen unter Beschuss. Öffnet einen Weg für die Flüchtenden.','Am Rand des Moores zeichnen Laternen die Spur der wandernden Gruft nach.','Ein Bote des Rates wurde abgefangen. Holt sein versiegeltes Schreiben zurück.','Vor der Morgenpforte werden Belagerungsleitern aufgerichtet. Zerschlagt die Vorhut.','Falsche Banner täuschen eure Kundschafter. Sichert die Kreuzung und prüft die Wappen.','Der Zugang zum Hochsitz führt durch einen bewachten Versorgungstunnel.','In den Vorhallen verstummt jeder Schritt. Nur die Waffen der Wächter sind zu hören.','Die äußere Thronwache hält das letzte Tor. Dahinter wartet die Splitterkrone.'],
 rift:['Ein flackernder Himmel kündigt die erste Vorhut aus dem Riss an.','Unter Asche verbirgt sich eine verlassene Raststätte. Sichert ihre Vorräte.','An den Rändern Silberlaubs kreuzen unsichtbare Jäger euren Pfad.','Die Zufahrt zur Knochenbrücke wird von verlorenen Wachen gehalten.','Zwischen Donnersteinen fordert ein Spähtrupp eure Stärke heraus.','Vor den Archiven stehen umgestürzte Bücherwagen. Rettet den Zugang.','Unter zwei Monden verlieren selbst vertraute Wege ihre Richtung.','Sturmwächter halten den einzigen stillen Korridor zum Zentrum.','Die Boten der vier Völker brauchen einen sicheren Versammlungsort.','Die Vorhut des Namenlosen trägt die Waffen besiegter Armeen.','Splitter fremder Welten blockieren den Weg zur Schwelle.','Eine letzte Welle bedroht die Flüchtenden. Haltet den Weg zum Morgen frei.'],
 frost:['Der erste Schnee verschluckt die Grenzsteine. Sichert den alten Pass.','Eingefrorene Wagen warten am Straßenrand auf ihre verschwundenen Besitzer.','Ein kalter Wind trägt Glockenklang aus einem Dorf ohne Stimmen.','Vor einer verschlossenen Laterne halten Eiswachen die Stellung.','Ein kleiner Sonnenfunke wärmt die Hände eurer Kundschafter.','Auf dem See zeichnet sich ein schmaler Pfad unter dem Eis ab.','Die Späher entdecken eine Quelle, die noch nicht erstarrt ist.','Im Schnee stehen Zelte einer verlorenen Expedition.','Über dem Gletscher bleiben die Schatten länger als das Licht.','Der Weg zum Winterhof führt durch eine bewachte Schlucht.','Die letzten Laternen weisen den Geretteten einen Weg ins Freie.','Vor den Toren der Winterkönigin sammelt sich die letzte Frostwache.'],
 embers:['Asche liegt auf den Wegen vor Rotfurt. Ein Gefangenenwagen fährt vorbei.','Unter einer erkalteten Esse führt ein Tunnel in die Tiefe.','Die ersten Kettenwachen sichern die Zugänge zu den Schmieden.','Ein freier Schmied zeigt euch einen unbewachten Abfluss.','An den Feuerstellen sprechen Gefangene erstmals von einem gemeinsamen Eid.','Zwischen den Öfen sperrt eine Patrouille den Weg zum Archiv.','Die Kohlenstraße führt an verlassenen Werkstätten entlang.','Bewaffnete Schuldwächter suchen nach den befreiten Schmieden.','Am Archivtor hängen Verträge, deren Namen niemand mehr lesen kann.','Unter dem Amboss erschüttert jeder Hammerschlag den Boden.','Die Befreiten versammeln sich hinter eurem Banner.','Die Leibwache des Richters hält den Zugang zur letzten Esse.'],
 depths:['An der Küste liegen Boote ohne Schatten. Sichert den Landungssteg.','Eine steigende Flut schneidet den Rückweg zwischen den Klippen ab.','Namenlose Ruderer bewachen einen überfluteten Marktplatz.','An einem trockenen Ankerplatz warten versprengte Reisende.','Eine Glocke unter Wasser weist den Weg zum alten Hafen.','Die Gezeiten legen eine bewachte Brücke für wenige Minuten frei.','Im Schilf liegt das trockene Buch einer verlorenen Chronistin.','Wasserwächter treiben über den Platz der versunkenen Stadt.','Ein letzter Leuchtturm hält die Boote auf Kurs.','Hinter dem Riff führt eine Treppe in die Tiefe.','Die geretteten Schiffe warten auf euer Zeichen.','Vor der Schwelle sammelt sich die letzte Wache der Flut.'],
 eclipse:['Unter einer dunklen Sonne kehren vertraute Silhouetten zurück.','Ein Echo führt euch auf einen Weg aus eurer ersten Reise.','Vier verlassene Lager erzählen dieselbe Geschichte aus anderer Sicht.','Am Rand der Nacht treffen die ersten Bannerboten zusammen.','Ein gemeinsamer Trommelschlag führt die Truppe durch das Zwielicht.','Wächter der alten Chronik blockieren den Übergang zum Morgen.','Zwischen leeren Buchseiten suchen Hüter nach verlorenen Namen.','Eine ungeschriebene Seite zeigt einen bisher unbekannten Pfad.','Die vier Banner versammeln ihre letzten Verbündeten.','Echos vergangener Gegner halten die letzte Brücke.','Hinter euch wartet die Truppe auf das Zeichen zum Aufbruch.','Vor dem freien Morgen steht eine letzte Wache aus Nacht und Erinnerung.']
};


// Presentation only: locations, witnesses and callbacks are derived from existing saves.
// No new flags, rewards, random draws or combat rules are introduced.
const CAMPAIGN_SCENERY={
 crown:['Vor den Toren Asterhalls','Die Brücke von Rotfurt','Der Hof der Namen','Unter dem zerbrochenen Hochsitz'],
 rift:['Die Straße im Aschenregen','Das brennende Archiv','Das Lager der vier Banner','Die offene Weltenpforte'],
 frost:['Das Laternendorf','Der Sonnenkern im Eispass','Die letzte warme Quelle','Der weiße Hof'],
 embers:['Die Ketten unter Rotfurt','Die freien Essen','Das Vertragsarchiv','Die Halle des Ambosses'],
 depths:['Der Hafen ohne Schatten','Der Ankerkai','Das versunkene Gedächtnis','Die Schwelle der letzten Flut'],
 eclipse:['Die Straße der Echos','Das Lager der vier Rhythmen','Die ungeschriebene Chronik','Der freie Morgen']
};
const CAMPAIGN_WITNESSES={
 crown:[{name:'Mara',role:'Botenläuferin aus Asterhall',icon:'✉',lines:['Ich bringe Nachrichten durch das Tor. Aber heute fehlen zu viele Namen auf meiner Liste.','Die Brücke trägt vier Banner. Ich möchte wissen, ob euer Eid auch für die Menschen darunter gilt.','Die Kinder nennen ihre Namen wieder laut. Das war gestern noch gefährlich.','Ich warte an der Schwelle, bis die Letzten nachkommen. Kein Name soll hier verloren gehen.']},{name:'Iven',role:'Schreiber von Rotfurt',icon:'✒',lines:['Das Kronensiegel verbietet uns sogar, nach den Gefangenen zu fragen.','Ich schreibe euren Eid auf. Diesmal stehen die Zeugen über dem Siegel.','Die falschen Banner tragen echte Namen. Wir müssen die beiden voneinander lösen.','Der Hochsitz ist leer ohne die Menschen, die ihm gehorchen. Heute entscheiden sie selbst.']}],
 rift:[{name:'Sela',role:'Reisende aus der anderen Welt',icon:'✦',lines:['In meiner Heimat fiel die Asche zuerst. Dann verschwanden die Wege.','Diese Karten zeigen beide Welten. Vielleicht muss keine von ihnen verloren gehen.','Vier Feuer, ein Lager. Zum ersten Mal finde ich zwischen den Bannern einen Platz.','Ich erkenne den Weg hinter der Schwelle. Diesmal kehre ich mit anderen zurück.']},{name:'Tarek',role:'Hüter der Weltkarten',icon:'⌖',lines:['Ein Riss verschiebt Straßen, aber nicht die Namen derer, die auf ihnen gehen.','Was wir aus dem Archiv tragen, werden wir morgen gemeinsam brauchen.','Der Sturm liest unsere Karten mit. Zeichnet trotzdem weiter.','Die letzte Karte endet nicht am Riss. Dahinter beginnt eine Heimat.']}],
 frost:[{name:'Edda',role:'Laternenhüterin',icon:'☀',lines:['Jede Laterne gehört einem Haus. Wenn sie erlischt, vergessen wir, wer darin wartet.','Der Sonnenfunke ist klein. Teilt sein Licht, dann findet es mehr als einen Weg.','Das Wasser klingt wieder. Ich hatte vergessen, wie ein Bach sich anhört.','Die Königin hält noch immer die Lawine an. Wir brauchen Zeit für die Menschen im Hof.']},{name:'Oren',role:'Wächter der warmen Quelle',icon:'♧',lines:['Ich bewahre einen warmen Becher auf. Für jemanden, der den Weg durch den Schnee schafft.','Im Eispass sind die Fußspuren älter als meine Erinnerung. Heute kommen neue dazu.','An dieser Quelle gibt es keine Rangfolge. Verwundete trinken zuerst.','Die Straße taut. Geht langsam genug, dass alle den ersten Morgen sehen.']}],
 embers:[{name:'Brann',role:'Schmied von Rotfurt',icon:'⚒',lines:['Die Ketten wurden an unseren Essen geschmiedet. Wir können auch ihre Schlösser öffnen.','An dieser Esse wird kein Eid mehr in Eisen gebrannt. Wer bleiben will, bleibt freiwillig.','Ein kalter Amboss ist besser als ein Vertrag, der uns gehört statt uns zu helfen.','Der Richter verlangt Gehorsam. Ich kenne den Klang seiner Ketten; heute antwortet das freie Eisen.']},{name:'Nima',role:'Hüterin der gelösten Verträge',icon:'✒',lines:['Ein Vertrag ohne freie Stimme ist nur eine andere Kette.','Ich lasse unter jedem Eid Platz. Auch ein freiwilliger Bund darf sich ändern.','Hier bewahren wir die gelösten Versprechen auf. Niemand soll sie wieder gegen uns verwenden.','Ich trage die Namen zum Amboss. Der Richter wird sie hören müssen.']}],
 depths:[{name:'Ari',role:'Fährperson am Nebelkai',icon:'⚓',lines:['An diesem Kai gehen Namen schneller verloren als Boote. Ich binde sie deshalb an die Ruder.','Die Anker halten. Jetzt müssen wir einander halten.','Unter den Stufen liegt mein alter Weg. Vielleicht wartet dort auch meine Erinnerung.','Wenn sich die Schwelle öffnet, fahre ich zuletzt. Niemand soll am falschen Ufer bleiben.']},{name:'Lio',role:'Chronistin mit dem trockenen Buch',icon:'✒',lines:['Ich schreibe auf trockenem Papier. Die Flut darf diese Namen nicht ein zweites Mal nehmen.','Jedes Ankerzeichen bekommt einen Eintrag. So finden die Schiffe einander wieder.','Eine Erinnerung ist kein Besitz. Ihr entscheidet, welche ihr aus dem Wasser holt.','Mein Buch hat Platz für die Heimkehr. Ich lasse die letzte Seite offen.']}],
 eclipse:[{name:'Tavi',role:'Echo einer früheren Chronik',icon:'✦',lines:['Ich erinnere mich an diese Straße. In meiner Chronik waren wir hier schon allein.','Euer Takt klingt anders. Vielleicht müssen wir mein Ende nicht wiederholen.','Diese Seite kenne ich nicht. Zum ersten Mal kann ich nichts vorhersagen.','Ich sehe einen Morgen, an den ich mich nicht erinnere. Das ist gut.']},{name:'Yara',role:'Hüterin der offenen Chronik',icon:'✒',lines:['Ein Echo ist eine Stimme, kein Befehl. Hört ihm zu, ohne ihm folgen zu müssen.','Vier Rhythmen dürfen verschieden bleiben. Ein gemeinsamer Schritt reicht.','Ich bewahre keine fertige Zukunft. Nur die Seite, auf der ihr sie schreibt.','Die Nacht besitzt den letzten Satz nicht. Ihr dürft ihn selbst schreiben.']}]
};
const CAMPAIGN_CHOICE_TRACES={
 crown:{rescue:'An Maras Botenfeuer hängt ein geöffnetes Kronensiegel. Die Befreiten geben eure Nachricht weiter.',guide:'Mara hat euren sicheren Weg mit Kreide markiert. Reisende erreichen Rotfurt über die geschützte Furt.',protect:'An Rotfurts Tor steht euer Schutzeid. Die Banner sammeln sich hinter gemeinsamen Schilden.',resolve:'Iven zeichnet euren Vorstoß auf den Stadtplan. Hinter der Front ist der Weg für die Schützen freigehalten.',restore:'Im Hof liegen die zurückgeholten Namen neben frischen Verbänden. Iven bewahrt keinen davon unter einem Kronensiegel.',supplies:'Beschriftete Vorratskisten stehen im Hof. Die Truppe trägt die geretteten Namen auf ihren Deckeln weiter.',lastshield:'Mara hält an der Schwelle eine Laterne für die Nachkommenden bereit. Euer Zeichen lautet: Niemand bleibt zurück.',lastattack:'Iven trägt eure Antwort zum Hochsitz: Der Weg wird freigekämpft. Die freien Banner folgen ihm.'},
 rift:{rescue:'Sela trägt ein gelöstes Band am Handgelenk. Am Feuer werden die Geschichten der Befreiten weitergegeben.',guide:'Sela hat Steine entlang des sicheren Wegs gesetzt. Weitere Reisende finden so aus dem Aschenregen.',protect:'Tarek hat die geretteten Schutzschriften in vier Abschriften verteilt. An jedem Lagerfeuer liegt eine.',resolve:'Auf Tareks Karte stehen die gemeinsamen Angriffslinien. Das gerettete Wissen weist den Bannern den Weg.',restore:'Sela hat einen freien Platz bei den Verbänden gelassen. Euer Versprechen schützt Reisende aus beiden Welten.',supplies:'Vorräte aus beiden Welten liegen nebeneinander. Sela versieht jede Kiste mit demselben Wegzeichen.',lastshield:'An der Weltenpforte stehen Laternen für die Nachkommenden. Sela zählt die Stimmen, bevor sie weitergeht.',lastattack:'Tarek zeichnet einen breiten Pfeil durch die letzte Schwelle. Euer Zeichen weist auf einen gemeinsam freigekämpften Heimweg.'},
 frost:{rescue:'Edda hat die aufgetaute Tür offen gelassen. Daneben brennt eine neue Laterne für die Befreiten.',guide:'Eddas Laternen markieren euren sicheren Pfad. Reisende hängen kleine Dankesbänder daran.',protect:'Der Sonnenfunke liegt in einer geschützten Laterne. Sein Licht sammelt die Truppe hinter den Schilden.',resolve:'Edda trägt den Sonnenfunken voran. Sein Licht zeigt der hinteren Reihe den Weg durch das Eis.',restore:'Oren stellt frische Becher und Verbände an die Quelle. Ein warmer Platz bleibt für die Verwundeten frei.',supplies:'Orens Vorratsbeutel hängen trocken über der Quelle. Die Truppe nimmt Wärme für den weiteren Weg mit.',lastshield:'Edda hält die Straße aus dem Hof offen. An jeder Laterne steht euer Zeichen: Niemand bleibt zurück.',lastattack:'Der Sonnenfunke zeigt zum letzten Frostwächter. Oren trägt euer Zeichen dorthin, wo der Weg freigekämpft werden soll.'},
 embers:{rescue:'Brann hängt ein geöffnetes Kettenglied über die Esse. Die befreiten Schmiede erkennen daran euer Banner.',guide:'Brann hat den sicheren Weg an den kalten Essen markiert. Reisende passieren die Wachfeuer unbemerkt.',protect:'Nima hängt den freiwilligen Schutzeid über der Schmiede auf. Niemand muss seinen Namen daruntersetzen.',resolve:'Der freiwillige Eid steht auf Branns Feldzeichen. Die hintere Reihe hat Platz für den gemeinsamen Vorstoß.',restore:'Nima hat Verbände zwischen die gelösten Verträge gelegt. Hilfe wird hier nicht länger mit Gehorsam bezahlt.',supplies:'Freie Vorratskisten ersetzen die versiegelten Vertragskisten. Nima vermerkt, dass daraus keine neue Schuld entsteht.',lastshield:'Brann sammelt die Nachkommenden vor dem Amboss. Euer Widerspruch lautet: Niemand bleibt zurück.',lastattack:'Nima trägt eure Antwort in die Halle: Wir kämpfen den Weg frei. Unter dem Satz bleibt Platz für jede eigene Stimme.'},
 depths:{rescue:'Am geretteten Boot hängt ein neues Namensband. Ari liest es bei jeder Abfahrt laut vor.',guide:'Ari hat den sicheren Wasserweg mit Bojen markiert. Andere Boote erreichen den Kai mit euren Zeichen.',protect:'Am Ankerkai verbindet ein gemeinsames Schutzseil die Boote. Lio hat euren Eid daneben aufgeschrieben.',resolve:'Ari richtet die Boote zur offenen Strömung aus. Euer Ankerzeichen bedeutet jetzt gemeinsamer Vorstoß.',restore:'Lios trockenes Buch liegt neben Verbänden und einer zurückgeholten Erinnerung. Am Kai bleibt ein Platz zur Erholung frei.',supplies:'Die Vorräte liegen in wasserdichten Kisten. Lio schreibt ihre Namen auf, bevor die nächste Flut kommt.',lastshield:'Ari hält das letzte Boot für die Nachkommenden bereit. Die Antwort an das Meer lautet: Niemand bleibt zurück.',lastattack:'Lio zeichnet euren freizukämpfenden Weg durch die letzte Flut. Kein Name muss dafür aus ihrem Buch verschwinden.'},
 eclipse:{rescue:'Tavi trägt euer Zeichen am Lagerfeuer. Das Echo bekommt in dieser Chronik eine eigene Stimme.',guide:'Tavi hat euren sicheren Weg mit kleinen Lichtern markiert. Weitere Echos finden darüber zu den Bannern.',protect:'Yara schreibt den gemeinsamen Schutztakt zwischen die vier Banner. Verschiedene Stimmen halten ihn zusammen.',resolve:'Tavi gibt den Takt für den Vorstoß. Die hintere Reihe antwortet, ohne ihre eigene Stimme aufzugeben.',restore:'Auf Yaras neuer Seite stehen eure Verbündeten neben den Verbänden. Hilfe wird Teil einer selbst gewählten Zukunft.',supplies:'Die Vorräte tragen Yaras Zeichen einer offenen Seite. Für die Weiterreise steht kein fremder Befehl darauf.',lastshield:'Tavi wartet am Rand des Morgenlichts auf die Letzten. Euer Schlusszeichen lautet: Niemand bleibt zurück.',lastattack:'Yara schreibt euren Vorstoß vor den letzten Widerstand. Die Chronik folgt dem Weg, den ihr selbst freikämpfen wollt.'}
};
function narrativeEscape(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function narrativeAct(round=S?.round||1){return Math.min(3,Math.max(0,Math.floor((round-1)/actLength())))}
function narrativeChoices(round=S?.round||1){
 if(!S||S.tutorial)return[];
 return Object.entries(S.storyChoices||{}).filter(([chapter,c])=>Number.isInteger(+chapter)&&+chapter>0&&+chapter<=round&&c&&typeof c==='object').sort((a,b)=>+a[0]-+b[0]).map(([chapter,choice])=>({chapter:+chapter,choice,text:CAMPAIGN_CHOICE_TRACES[S.campaign]?.[choice.id]||choice.echo||choice.name||'Eine Entscheidung bleibt Teil eurer Chronik.'}));
}
function sceneryStyle(act=narrativeAct()){
 const c=S?.campaign;
 return CAMPAIGN_SCENERY[c]?`--chapter-scenery:url('assets/scenery/${c}.webp?v=77');--chapter-position:${act%2?'100%':'0%'} ${act>1?'100%':'0%'}`:'';
}
function chapterWitness(act=narrativeAct(),round=S?.round||1){
 const cast=CAMPAIGN_WITNESSES[S?.campaign];if(!cast)return null;
 const local=(round-1)%actLength();return cast[local<Math.ceil(actLength()/2)?0:1];
}
function chapterAtmosphereMarkup(act=narrativeAct(),history=false){
 if(!S||S.tutorial||!CAMPAIGN_SCENERY[S.campaign])return'';
 const place=CAMPAIGN_SCENERY[S.campaign][act],cast=CAMPAIGN_WITNESSES[S.campaign],witness=chapterWitness(act),through=history?Math.min(S.round,(act+1)*actLength()):S.round;
 const traces=narrativeChoices(through),last=traces.at(-1);
 const traceMarkup=t=>`<p class="decision-trace"><b>Kapitel ${t.chapter} · ${narrativeEscape(t.choice.name||'Eure Wahl')}</b><span>${narrativeEscape(t.text)}</span></p>`;
 return `<section class="campaign-atmosphere" aria-label="Schauplatz und Begegnung"><div class="scene-meeting"><div class="chapter-scenery" role="img" aria-label="${narrativeEscape(place)}" style="${sceneryStyle(act)}"></div><div><small>Akt ${act+1} · Schauplatz</small><h3>${place}</h3>${(history?cast:[witness]).map(person=>`<p class="witness-line"><b>${person.icon} ${person.name}</b><span class="witness-role">${person.role}</span><q>${person.lines[act]}</q></p>`).join('')}</div></div>${history?traces.filter(t=>t.chapter>act*actLength()).map(traceMarkup).join(''):last?traceMarkup(last):''}${!history&&traces.length>1?`<details class="earlier-traces"><summary>Weitere Spuren eurer Entscheidungen (${traces.length-1})</summary>${traces.slice(0,-1).map(traceMarkup).join('')}</details>`:''}</section>`;
}
function renderCampaignAtmosphere(){
 if(!S||S.tutorial||!CAMPAIGN_SCENERY[S.campaign])return;
 if(S.phase==='shop')$('journeyChoice').insertAdjacentHTML('beforeend',chapterAtmosphereMarkup());
 if(S.phase==='end'){
  const traces=narrativeChoices();
  $('message').insertAdjacentHTML('beforeend',`<section class="campaign-closing"><h3>${S.defeated||S.life<=0?'Was von eurer Reise bleibt':'Euer Banner hinterlässt Spuren'}</h3><p>${S.defeated||S.life<=0?'Eure Zeugen bewahren die bisherigen Entscheidungen. Der letzte Widerstand steht noch.':CAMPAIGN_WITNESSES[S.campaign].map(p=>p.name).join(' und ')+' tragen eure Geschichte in den neuen Morgen.'}</p>${traces.map(t=>`<p class="decision-trace"><b>${narrativeEscape(t.choice.name||'Eure Wahl')}</b><span>${narrativeEscape(t.text)}</span></p>`).join('')}<button class="btn secondary" id="closingChronicle">Chronik lesen</button></section>`);
  $('closingChronicle').onclick=showStory;
 }
}

// Individual encounter purposes: route choice changes the story, not combat rules.
const CAMPAIGN_ENCOUNTERS={
 "crown": [
  [
   "Den Ursprung des brennenden Banners finden.",
   "Wagenzug begleiten",
   "Kronenspäher durchsuchen die Händlerwagen und sperren die Furt.",
   "Die Händler erreichen das Lager und beschreiben die Brandstifter.",
   "Brandstelle untersuchen",
   "Die Brandstifter sichern ihren Rückzug mit einer schweren Nachhut.",
   "Am Brandplatz bleibt ein falsches Kronensiegel zurück."
  ],
  [
   "Eine Nachricht nach Asterhall bringen.",
   "Botenstraße",
   "Eine Kontrolltruppe beschlagnahmt alle Schreiben an die Stadt.",
   "Mara kann die Warnung durch das Stadttor tragen.",
   "Wachtturm umgehen",
   "Im verlassenen Turm lauert eine Abfangtruppe auf Boten.",
   "Ihr findet die Liste der abgefangenen Nachrichten."
  ],
  [
   "Den Kronensplitter aus den Ruinen bergen.",
   "Archivhof",
   "Siegelwachen verweigern den Zugang zu den Aufzeichnungen.",
   "Iven liest die Spur des Splitters in den offenen Archiven.",
   "Eingestürztes Gewölbe",
   "Die Plünderer bewachen ihren Fund mit ihrer besten Truppe.",
   "Der Splitter wird den Plünderern entrissen."
  ],
  [
   "Den besetzten Zugang zum Dornenhain öffnen.",
   "Hainstraße",
   "Kronenvorposten halten die Zufahrt zum Dornenhof besetzt.",
   "Die Gesandten können den Dornenhof erreichen.",
   "Wurzelsteg",
   "Eine Eingreiftruppe bewacht den schmalen Hintereingang.",
   "Ihr nehmt der Besatzung ihren Rückweg."
  ],
  [
   "Rotfurts Bewohner aus dem Beschuss führen.",
   "Geschützte Furt",
   "Belagerungstruppen versperren den Übergang für Flüchtende.",
   "Die Flüchtenden erreichen das andere Ufer.",
   "Belagerungsstellung",
   "Die schwere Geschützeskorte verhindert jeden Zugang zu den Waffen.",
   "Der Beschuss auf die Fluchtroute verstummt."
  ],
  [
   "Herausfinden, weshalb die Gruft wandert.",
   "Laternenpfad",
   "Gebundene Gruftwachen treiben Reisende von der Moorstraße.",
   "Die Reisenden zeigen euch die nächtliche Spur der Gruft.",
   "Gruftzugang",
   "Die Kronenbesatzung trägt geraubte Erinnerungen in das Gewölbe.",
   "Die Erinnerungen zeigen, dass die Gruft einen verlorenen Namen sucht."
  ],
  [
   "Die falschen Gesichter des Rates entlarven.",
   "Bote des Rates",
   "Maskierte Abfänger wollen Ivens Beweise vernichten.",
   "Das versiegelte Schreiben erreicht die freien Ratsmitglieder.",
   "Maskenlager",
   "Die Leibtruppe des falschen Gesandten bewacht seine Ersatzmasken.",
   "Ihr sichert die Masken als Beweis für den Betrug."
  ],
  [
   "Die Morgenpforte aus der Belagerung lösen.",
   "Versorgungsgasse",
   "Kronenwachen unterbrechen die Versorgung der Verteidiger.",
   "Die Verteidiger erhalten einen offenen Versorgungskorridor.",
   "Leiternstellung",
   "Die Belagerungsreserve schützt den nächsten Sturmangriff.",
   "Die Angreifer verlieren ihre vorbereitete Sturmstellung."
  ],
  [
   "Das gefälschte eigene Banner nachweisen.",
   "Wappenprüfung",
   "Eine falsche Patrouille hält Reisende unter eurem Wappen fest.",
   "Mara warnt die Reisenden vor den gefälschten Zeichen.",
   "Bannerwerkstatt",
   "Die Fälscher lassen ihre Druckstöcke von einer Elitetruppe bewachen.",
   "Die Druckstöcke beweisen, wer euren Namen missbraucht."
  ],
  [
   "Das steinerne Herz unter dem Thron erreichen.",
   "Versorgungstunnel",
   "Thronwachen halten die Treppe unter dem Hochsitz geschlossen.",
   "Iven erreicht die Halle des steinernen Herzens.",
   "Herzwache",
   "Die innere Wache schützt das Siegel, das das Herz bindet.",
   "Ihr legt die Verbindung zwischen Herz und Krone offen."
  ],
  [
   "Die verschluckten Stimmen aus der Halle lösen.",
   "Zeugengang",
   "Siegelwachen verhindern, dass die Zeugen ihre Namen sprechen.",
   "Die Zeugen bringen ihre Stimmen in die Halle zurück.",
   "Spiegelkammer",
   "Die engste Kronentruppe bewacht die gespeicherten Echos.",
   "Die Echos erzählen die Wahrheit über die Splitterkrone."
  ],
  [
   "Die Herrschaft der Splitterkrone brechen.",
   "Freie Schwelle",
   "Die letzte Thronwache hält die freien Banner außerhalb der Halle.",
   "Die freien Banner erreichen den Hochsitz.",
   "Kronensiegel",
   "Die Leibtruppe verteidigt den direkten Zugang zur Krone.",
   "Ihr erreicht das letzte Kronensiegel."
  ]
 ],
 "rift": [
  [
   "Den ersten Weltenriss eingrenzen.",
   "Grenzstraße",
   "Risswachen treiben die Bewohner auf den offenen Riss zu.",
   "Die Bewohner erreichen einen Ort außerhalb der Risskante.",
   "Rissanker",
   "Die Vorhut schützt den Anker, der den Riss offen hält.",
   "Tarek kann den Anker vermessen."
  ],
  [
   "Reisende aus dem Aschenregen holen.",
   "Raststättenweg",
   "Die Risspatrouille hält die einzige überdachte Straße besetzt.",
   "Sela führt die Reisenden unter ein gemeinsames Dach.",
   "Aschenquelle",
   "Eine starke Nachhut bewacht den Übergang aus der verlorenen Welt.",
   "Weitere Reisende können die Aschenwelt verlassen."
  ],
  [
   "Die unsichtbaren Jäger in Silberlaub aufspüren.",
   "Spur der Glöckchen",
   "Die Jäger sperren den markierten Waldweg für die Flüchtenden.",
   "Glöckchen zeigen künftig an, wo die Jäger sich bewegen.",
   "Silberlichtung",
   "Die Jagdtruppe bewacht die Stelle, die ihre Spuren verbirgt.",
   "Das Tarnzeichen der Jäger wird freigelegt."
  ],
  [
   "Den Zoll der Knochenbrücke beenden.",
   "Brückenzufahrt",
   "Gebundene Wachen verlangen Reisende als lebenden Zoll.",
   "Die wartenden Reisenden gelangen bis zur Brücke.",
   "Pfeilersteg",
   "Die Vollstrecker bewachen die Bindung unter den Brückenpfeilern.",
   "Ihr erreicht das Siegel des grausamen Zolls."
  ],
  [
   "Einen Donnerpakt mit den freien Bannern schließen.",
   "Gesandtenweg",
   "Risssoldaten wollen die Gesandten voneinander trennen.",
   "Die Gesandten erreichen gemeinsam die Donnersteine.",
   "Sturmzeichen",
   "Die Sturmreserve besetzt den Ort des gemeinsamen Schwurs.",
   "Die Donnersteine stehen den freien Bannern offen."
  ],
  [
   "Die Weltkarten aus dem brennenden Archiv holen.",
   "Bücherwagen",
   "Eine Truppe des Heerführers schneidet die Bücherwagen vom Ausgang ab.",
   "Tarek bringt die geretteten Karten aus dem Feuer.",
   "Archivkern",
   "Die Plünderer bewachen die vollständige Karte beider Welten.",
   "Die Karte beider Welten bleibt erhalten."
  ],
  [
   "Die Irrwege unter dem doppelten Mond beenden.",
   "Markierter Weg",
   "Mondgebundene Wachen treiben Reisende auf falsche Pfade.",
   "Sela markiert den Weg, der nicht zum Riss zurückführt.",
   "Mondspiegel",
   "Die Nachtreserve bewacht die Spiegel, die falsche Wege zeigen.",
   "Die Spiegel verraten den Ursprung der täuschenden Schatten."
  ],
  [
   "Den stillen Korridor zum Sturmherz öffnen.",
   "Windschatten",
   "Sturmwachen halten den einzigen ruhigen Durchgang besetzt.",
   "Die Truppe erreicht den windstillen Zugang zum Zentrum.",
   "Sturmanker",
   "Die Ankerwache verteidigt die Stelle, an der der Sturm gebunden ist.",
   "Ihr erreicht den Anker im Herzen des Sturms."
  ],
  [
   "Die vier Banner zu einer Versammlung bringen.",
   "Botenlager",
   "Risspatrouillen greifen die ankommenden Bannerboten an.",
   "Vier Gesandte können an einem Feuer beraten.",
   "Feindlicher Spähposten",
   "Der Heerführer schützt die Kundung der Versammlung mit Elitespähern.",
   "Die Versammlung wird nicht mehr aus dem Spähposten verfolgt."
  ],
  [
   "Dem Namenlosen seine geraubten Erinnerungen nehmen.",
   "Zeugenweg",
   "Seine Soldaten halten Zeugen aus früheren Welten fest.",
   "Die Zeugen nennen die Namen hinter den geraubten Waffen.",
   "Trophäenlager",
   "Die Leibtruppe verteidigt die Erinnerungen seiner besiegten Gegner.",
   "Die Erinnerungen lösen erste Stimmen aus seinem Heer."
  ],
  [
   "Die Schwelle zwischen den Welten erreichen.",
   "Splitterpfad",
   "Schwellenwachen sperren den Weg zwischen schwebenden Trümmern.",
   "Tarek markiert einen gangbaren Weg durch die Splitter.",
   "Verankerung",
   "Die innere Risswache bewacht die Befestigung der Schwelle.",
   "Ihr erreicht die letzte Verbindung zwischen den Welten."
  ],
  [
   "Die Heimkehr durch den Riss ermöglichen.",
   "Heimweg",
   "Die letzte Risswelle trennt Flüchtende von ihren Heimatwegen.",
   "Die Heimkehrenden sammeln sich an der offenen Schwelle.",
   "Risszentrum",
   "Die letzte Heeresreserve hält das Zentrum gegen die freien Banner.",
   "Die freien Banner erreichen den Ursprung des Widerstands."
  ]
 ],
 "frost": [
  [
   "Den angehaltenen Morgen untersuchen.",
   "Dorfplatz",
   "Frostwachen halten die Bewohner von der stillstehenden Uhr fern.",
   "Edda erkennt den Zauber in der gefrorenen Uhr.",
   "Uhrturm",
   "Die Eisreserve schützt den eingefrorenen Zeiger.",
   "Ihr findet die Spur zum Ursprung des Stillstands."
  ],
  [
   "Die Laternenstraße wieder öffnen.",
   "Hausgasse",
   "Frostpatrouillen vertreiben die Laternenhüter aus der Gasse.",
   "Die Hüter können die erloschenen Laternen wieder entzünden.",
   "Laternenkammer",
   "Die Kältewache bewacht die eingesperrten Lichtfunken.",
   "Edda bringt die Lichtfunken an die Straße zurück."
  ],
  [
   "Die Eingeschlossenen im stummen Dorf erreichen.",
   "Wohnhäuser",
   "Eiswachen versperren die Türen der eingefrorenen Häuser.",
   "Die Eingeschlossenen können ihre Namen wieder nennen.",
   "Glockenturm",
   "Die Frostreserve bewacht die Glocke, die das Dorf verstummen lässt.",
   "Die Glocke gibt dem Dorf seine Stimmen zurück."
  ],
  [
   "Den Eispass für die Geretteten freihalten.",
   "Passstraße",
   "Frostwachen wollen den offenen Straßenabschnitt wieder vereisen.",
   "Die Geretteten gelangen bis zum bewachten Pass.",
   "Eisriegel",
   "Die Passreserve verteidigt den Zauber, der den Weg zuschließt.",
   "Ihr erreicht die Bindung des Eispasses."
  ],
  [
   "Das lebendige Pochen unter dem Gletscher finden.",
   "Schmelzrinne",
   "Eispatrouillen sperren den Abstieg an der warmen Rinne.",
   "Oren verfolgt das Pochen bis zur Tiefe.",
   "Gletscherkammer",
   "Die Kernwache schützt den eingeschlossenen Sonnenkern.",
   "Ihr legt die Kammer des Sonnenkerns frei."
  ],
  [
   "Den Sonnenfunken aus der verschlossenen Hand lösen.",
   "Hand des Wächters",
   "Frostsoldaten trennen Edda vom Träger des Sonnenfunkens.",
   "Edda erreicht die eingefrorene Hand.",
   "Sonnengefängnis",
   "Die Frostreserve schützt das Gefängnis des gestohlenen Lichts.",
   "Der Sonnenfunke wird aus seinem Eisgefängnis gelöst."
  ],
  [
   "Die verlorenen Winter im Spiegel unterscheiden.",
   "Spiegelgang",
   "Spiegelwachen treiben Suchende in falsche Erinnerungen.",
   "Oren erkennt den Weg, der zur lebenden Quelle führt.",
   "Spiegelrückseite",
   "Die Nachtwache schützt die Bindungen der Winterbilder.",
   "Die Spiegel zeigen, welche Menschen noch gerettet werden können."
  ],
  [
   "Die Herzschläge aus der Uhr bewahren.",
   "Herzschlaggang",
   "Die Uhrwachen halten euch für Plünderer und verweigern Einlass.",
   "Ihr erreicht die eingeschlossenen Herzschläge.",
   "Ziffernkammer",
   "Die Zeitreserve bewacht den Stillstand im Inneren der Uhr.",
   "Die Herzschläge können aus der Uhr getragen werden."
  ],
  [
   "Das letzte Tauwasser zu den Verwundeten bringen.",
   "Quellenweg",
   "Frostpatrouillen versuchen die letzte freie Quelle zu verschließen.",
   "Oren hält das Wasser für die Verwundeten erreichbar.",
   "Eisdamm",
   "Die Dammwache verteidigt die Vereisung oberhalb der Quelle.",
   "Der Zufluss zur Quelle bleibt offen."
  ],
  [
   "Die Winterkönigin im weißen Hof erreichen.",
   "Hofstraße",
   "Ihre Frostwachen lassen niemanden bis zur Königin durch.",
   "Edda kann der Königin von den Geretteten berichten.",
   "Hofriegel",
   "Die innere Eisreserve schützt den Zugang zum Zauberkern.",
   "Ihr erkennt, weshalb ein plötzliches Tauwetter gefährlich wäre."
  ],
  [
   "Den letzten Eingeschlossenen Zeit zur Flucht geben.",
   "Laternenkette",
   "Frostwachen schneiden die hintersten Gruppen vom Weg ab.",
   "Die Nachkommenden finden zurück zur Laternenstraße.",
   "Lawinenwache",
   "Die stärkste Frosttruppe drängt gegen die angehaltene Lawine.",
   "Die Flucht bleibt lange genug für die letzten Gruppen offen."
  ],
  [
   "Den ersten Morgen ermöglichen, ohne die Gefangenen zu verlieren.",
   "Straße ins Freie",
   "Die letzte Frostwache trennt den Hof von der freien Straße.",
   "Die Eingeschlossenen erreichen den Ausgang des Hofs.",
   "Kern des Winters",
   "Die letzte Eisreserve verteidigt den Kern des Stillstands.",
   "Die Truppe erreicht den letzten Frostwächter."
  ]
 ],
 "embers": [
  [
   "Die Gefangenen unter Rotfurt finden.",
   "Wagenstraße",
   "Kettenwachen treiben einen Gefangenenwagen zurück zur Mine.",
   "Brann erfährt, in welche Mine die Wagen fahren.",
   "Förderschacht",
   "Die schwere Schachtwache hält den direkten Abstieg besetzt.",
   "Ihr erreicht den inneren Gefangenentransport."
  ],
  [
   "Den Zugang zu den kalten Essen öffnen.",
   "Abflusstunnel",
   "Eine Suchpatrouille will den Tunnel für die Schmiede schließen.",
   "Die Schmiede können den Tunnel passieren.",
   "Kettenkran",
   "Die Kranwache verteidigt die Werkzeuge für neue Gefangenenketten.",
   "Die Kettenschmiede kann keine neuen Transporte ausrüsten."
  ],
  [
   "Die Schmiede vom ersten Vertragszwang lösen.",
   "Werkstattgang",
   "Vertragswachen sperren die freien Werkstätten ab.",
   "Brann erreicht die verschlossenen Arbeitsplätze.",
   "Schuldsiegel",
   "Die Siegelreserve schützt die aufgezwungenen Schmiedeverträge.",
   "Nima kann die ersten Zwangsverträge lösen."
  ],
  [
   "Die Kettenwache aus den Schmieden vertreiben.",
   "Entwässerungsweg",
   "Die Kettenvorhut bewacht die Ausgänge der eingeschlossenen Schmiede.",
   "Die Befreiten erreichen die Ausgänge der Schmiede.",
   "Wachzentrale",
   "Die Kettenreserve schützt die Befehlsstelle der Besatzung.",
   "Ihr erreicht die Kommandostelle der Kettenwache."
  ],
  [
   "Einen freiwilligen Eid für die Befreiten ermöglichen.",
   "Versammlungsplatz",
   "Schuldpatrouillen treiben die Befreiten vor der Beratung auseinander.",
   "Nima kann den freiwilligen Eid vor allen verlesen.",
   "Eidbrenner",
   "Die Vollstrecker schützen die Esse der erzwungenen Eide.",
   "Der Zwangseid kann nicht länger ins Eisen gebrannt werden."
  ],
  [
   "Die ersten gelösten Versprechen ins Archiv bringen.",
   "Vertragsboten",
   "Eine Patrouille will Nimas gelöste Verträge beschlagnahmen.",
   "Die Verträge gelangen unversehrt ins Archiv.",
   "Archivschlüssel",
   "Die Archivreserve bewacht den Schlüssel zur Vertragskammer.",
   "Nima kann die versiegelte Vertragskammer öffnen."
  ],
  [
   "Die Kohlenstraße für die freien Essen sichern.",
   "Werkstattstraße",
   "Schuldwachen halten die Versorgung der freien Schmiede auf.",
   "Brann kann die freien Essen weiter betreiben.",
   "Kohlenlager",
   "Die schwere Lagerwache schützt den Vorrat des Richters.",
   "Die Versorgung steht nicht länger unter seinem Schuldsiegel."
  ],
  [
   "Die Jagd auf die befreiten Schmiede beenden.",
   "Versteckte Höfe",
   "Suchtruppen haben die Zufluchtsorte der Schmiede entdeckt.",
   "Die Schmiede erhalten Zeit, ihre Zufluchtsorte zu verlassen.",
   "Fahndungsstelle",
   "Die Schuldreserve bewacht die Listen der gesuchten Befreiten.",
   "Die Fahndungslisten können gegen niemanden mehr verwendet werden."
  ],
  [
   "Die letzte Schuld aus dem Archiv lösen.",
   "Lesesaal",
   "Vertragswachen halten Nima von den ausgelöschten Namen fern.",
   "Die Namen in den Verträgen werden wieder lesbar.",
   "Schuldregister",
   "Die Registerwache verteidigt die gesammelten Zwangsversprechen.",
   "Nima kann die letzte aufgezwungene Schuld lösen."
  ],
  [
   "Die Bindung unter dem Amboss verstehen.",
   "Unterhalle",
   "Ambosswachen verweigern den Zugang zu den alten Schmiedezeichen.",
   "Brann findet, was den Richter an den Amboss bindet.",
   "Urteilskammer",
   "Die Urteilsreserve schützt die Zeichen des erzwungenen Gehorsams.",
   "Ihr legt die Verbindung zwischen Urteil und Ketten offen."
  ],
  [
   "Die freien Stimmen bis vor den Richter tragen.",
   "Bannerzug",
   "Kettenpatrouillen schneiden die Befreiten vom gemeinsamen Zug ab.",
   "Nima führt die Stimmen der Befreiten bis zur Halle.",
   "Stummer Hammer",
   "Die Hammerwache bewacht das Werkzeug, das jede Gegenrede erstickt.",
   "Der Hammer kann die freien Stimmen nicht mehr übertönen."
  ],
  [
   "Den Gehorsamszwang des eisernen Richters brechen.",
   "Letzte Esse",
   "Die letzte Kettenwache sperrt die Zugänge zum Amboss.",
   "Die freien Schmiede betreten die Halle des Richters.",
   "Richterzeichen",
   "Seine engste Reserve verteidigt das letzte Urteilssiegel.",
   "Ihr erreicht den eisernen Richter."
  ]
 ],
 "depths": [
  [
   "Die Boote ohne Schatten an Land bringen.",
   "Nebelkai",
   "Flutwachen halten den Landungssteg für die Boote gesperrt.",
   "Ari bringt die wartenden Boote an den Kai.",
   "Versunkener Anleger",
   "Die schwere Gezeitenwache bewacht den direkten Landeplatz.",
   "Auch die abgetriebenen Boote erreichen das Ufer."
  ],
  [
   "Den Rückweg zwischen den Klippen bewahren.",
   "Klippenweg",
   "Wasserpatrouillen drängen Reisende in die steigende Flut.",
   "Die Reisenden gelangen über den noch trockenen Rückweg.",
   "Flutriegel",
   "Die Riegelwache verteidigt die überflutete Abkürzung.",
   "Ihr öffnet einen zweiten Ausweg aus den Klippen."
  ],
  [
   "Den vergessenen Namen am Marktplatz nachgehen.",
   "Trockene Stufen",
   "Namenlose Ruderer lassen niemanden zum alten Markt hinab.",
   "Lio kann die alten Namenszeichen lesen.",
   "Marktbrunnen",
   "Die Brunnenwache schützt die gesammelten vergessenen Namen.",
   "Die ersten Namen werden aus dem Brunnen zurückgeholt."
  ],
  [
   "Einen sicheren Ankerplatz für die Flotte finden.",
   "Ankersteg",
   "Die Flutvorhut vertreibt Boote vom letzten trockenen Platz.",
   "Ari kann die Boote am trockenen Steg zusammenführen.",
   "Ankerkammer",
   "Die Gezeitenreserve schützt die Bindung des Ankerplatzes.",
   "Ihr erreicht den Anker unter dem Steg."
  ],
  [
   "Der Glocke unter Wasser bis zum alten Hafen folgen.",
   "Küstenpfad",
   "Flutpatrouillen sperren den Pfad entlang der Glockenspur.",
   "Ari findet den Zugang zum alten Hafen.",
   "Glockenturm",
   "Die Turmwache schützt die untergetauchte Hafenglocke.",
   "Die Glocke weist auch verlorenen Booten wieder den Weg."
  ],
  [
   "Die kurzzeitig freie Gezeitenbrücke nutzen.",
   "Brückenufer",
   "Wasserwachen versperren die trockengefallene Zufahrt.",
   "Die wartenden Reisenden können die Brücke überqueren.",
   "Gezeitenpfosten",
   "Die Pfostenwache hält die Brücke unter dem Flutzeichen.",
   "Ihr löst das Zeichen, das den Übergang bedroht."
  ],
  [
   "Lios trockenes Buch aus dem Schilf bergen.",
   "Schilfufer",
   "Namenlose Patrouillen schneiden Lio vom Fundort ihres Buches ab.",
   "Lio erhält das trockene Buch zurück.",
   "Versunkene Schreibstube",
   "Die Erinnerungswache schützt die verstreuten Seiten der Chronistin.",
   "Auch die verlorenen Seiten werden aus der Tiefe geborgen."
  ],
  [
   "Die versunkene Stadt für die Suchenden öffnen.",
   "Stadttreppe",
   "Wasserwachen vertreiben alle Suchenden vom ehemaligen Stadtplatz.",
   "Die Suchenden erreichen die ersten Häuser der Stadt.",
   "Flutplatz",
   "Die Stadtreserve schützt die Bindung über dem versunkenen Platz.",
   "Ihr erreicht die Bindung, die die Stadt verschlossen hält."
  ],
  [
   "Eine verlorene Erinnerung aus der Tiefe holen.",
   "Leuchtturmweg",
   "Flutpatrouillen wollen das letzte Licht der Boote löschen.",
   "Ari hält die Heimkehrboote am richtigen Kurs.",
   "Gedächtniskammer",
   "Die Erinnerungsreserve bewacht die Namen unter dem Leuchtturm.",
   "Lio bringt eine Erinnerung an das trockene Ufer."
  ],
  [
   "Die Treppe hinter dem Riff erreichen.",
   "Riffkante",
   "Riffwachen versperren den Abstieg zwischen den Gezeiten.",
   "Die Truppe erreicht die alte Treppe.",
   "Riffdurchbruch",
   "Die Tiefenreserve bewacht die direkte Öffnung zum Meeresgrund.",
   "Ihr legt den Weg zur letzten Schwelle frei."
  ],
  [
   "Die geretteten Schiffe auf die letzte Flut vorbereiten.",
   "Bootskette",
   "Flutpatrouillen schneiden einzelne Schiffe vom gemeinsamen Zeichen ab.",
   "Ari verbindet die wartenden Schiffe mit demselben Kurs.",
   "Strömungswache",
   "Die stärkste Gezeitentruppe schützt die trennende Strömung.",
   "Die Schiffe können sich vor der letzten Flut sammeln."
  ],
  [
   "Die Namen durch die letzte Flut bewahren.",
   "Heimkehrsteg",
   "Die letzte Flutwache hält die Boote von der offenen Schwelle fern.",
   "Die Boote erreichen den letzten Übergang.",
   "Schwelle der Flut",
   "Die Tiefenreserve verteidigt den Ursprung des Vergessens.",
   "Die Truppe erreicht die Flut des Vergessens."
  ]
 ],
 "eclipse": [
  [
   "Das erste Echo von einem fremden Befehl lösen.",
   "Straße der Stimmen",
   "Nachtwachen treiben die Echos zurück in ihre alten Rollen.",
   "Tavi kann sich zu den freien Bannern stellen.",
   "Echospiegel",
   "Die Spiegelreserve bewacht die Befehle früherer Chroniken.",
   "Die Echos erkennen die Befehle als fremde Stimmen."
  ],
  [
   "Einen alten Weg mit einer neuen Entscheidung betreten.",
   "Erinnerungspfad",
   "Chronikwachen erzwingen dieselbe Wegfolge wie in der ersten Reise.",
   "Yara hält fest, wo ihr erstmals anders gehandelt habt.",
   "Knoten der Wiederholung",
   "Die Nachtreserve schützt den erzwungenen Ablauf des Pfades.",
   "Der Pfad verliert seine vorgeschriebene Richtung."
  ],
  [
   "Die vier Sichtweisen der verlassenen Lager sammeln.",
   "Lagerfeuerweg",
   "Nachtpatrouillen verhindern, dass die Lagerzeugen zusammentreffen.",
   "Vier Stimmen können ihre Geschichten nebeneinander erzählen.",
   "Chronikposten",
   "Die Postenwache schützt die angeblich einzige gültige Geschichte.",
   "Yara legt die Widersprüche in der alten Chronik offen."
  ],
  [
   "Die ersten Bannerboten aus der Nacht holen.",
   "Botentreffpunkt",
   "Die Nachtvorhut schneidet die Bannerboten voneinander ab.",
   "Die Boten finden einen gemeinsamen Treffpunkt.",
   "Nachtzeichen",
   "Die Zeichenreserve bewacht die Grenze zwischen den Lagern.",
   "Ihr erreicht die Bindung, die die Banner voneinander trennt."
  ],
  [
   "Vier Rhythmen zu einem gemeinsamen Schritt verbinden.",
   "Trommelpfad",
   "Nachtpatrouillen zerstreuen die Truppe zwischen widersprechenden Takten.",
   "Tavi gibt den Bannern einen gemeinsamen Schritt.",
   "Stummer Taktgeber",
   "Die Taktwache schützt den erzwungenen Rhythmus der alten Chronik.",
   "Der alte Taktgeber kann die freien Stimmen nicht mehr übertönen."
  ],
  [
   "Den Übergang zum Morgen erreichen.",
   "Zwielichtgang",
   "Chronikwachen halten den Gang zur hellen Seite geschlossen.",
   "Yara erreicht die erste offene Stelle im Morgenlicht.",
   "Seitenriegel",
   "Die Seitenreserve bewacht die vorgeschriebene Grenze zur Nacht.",
   "Die Grenze zum Morgen verliert ihren alten Befehl."
  ],
  [
   "Verlorene Namen aus den leeren Seiten holen.",
   "Hüterpfad",
   "Nachtpatrouillen jagen die Namenhüter zwischen den Seiten.",
   "Die Hüter können die gefundenen Namen zusammentragen.",
   "Leere Namenskammer",
   "Die Erinnerungsreserve bewacht die ausgelöschten Einträge.",
   "Die Einträge werden als Stimmen in die Chronik zurückgeholt."
  ],
  [
   "Die ungeschriebene Seite gegen die alte Chronik verteidigen.",
   "Offener Seitenrand",
   "Chronikwachen wollen den neuen Seitenrand wieder versiegeln.",
   "Yara kann die Seite für eigene Entscheidungen offen halten.",
   "Befehlsarchiv",
   "Die Archivreserve schützt die letzten Vorschriften über eure Zukunft.",
   "Die alten Vorschriften verlieren ihre Macht über die neue Seite."
  ],
  [
   "Die letzten Verbündeten unter vier Bannern sammeln.",
   "Versammlungsweg",
   "Nachtpatrouillen trennen die ankommenden Verbündeten voneinander.",
   "Die vier Banner können gemeinsam den Aufbruch beraten.",
   "Schattenkundung",
   "Die Kundungsreserve verfolgt jede Bewegung der Versammlung.",
   "Die Versammlung wird nicht mehr aus dem Schatten beobachtet."
  ],
  [
   "Die Brücke aus vergangenen Gegnern überschreiten.",
   "Zeugenbrücke",
   "Gebundene Echos lassen nur den Ablauf der alten Niederlage zu.",
   "Tavi zeigt den Echos eine andere Möglichkeit.",
   "Letzter Echoknoten",
   "Die stärksten alten Gegner verteidigen den Wiederholungsknoten.",
   "Die Brücke löst sich aus der vorgeschriebenen Wiederholung."
  ],
  [
   "Der Truppe ein selbst gewähltes Zeichen zum Aufbruch geben.",
   "Bannerlinie",
   "Nachtpatrouillen schneiden die hintersten Verbündeten vom Zeichen ab.",
   "Alle vier Banner hören das gemeinsame Aufbruchszeichen.",
   "Nachtverkünder",
   "Die Verkünderreserve schützt den angeblich letzten Satz der Chronik.",
   "Yara nimmt der Nacht das Recht auf den letzten Satz."
  ],
  [
   "Einen Morgen ohne fremden Befehl ermöglichen.",
   "Straße zum Licht",
   "Die letzte Nachtwache sperrt die Straße in den freien Morgen.",
   "Die Truppe erreicht den Rand des Morgenlichts.",
   "Ursprung der Nacht",
   "Die innere Reserve verteidigt den Ursprung aller Nachtbefehle.",
   "Ihr erreicht den Ursprung der Nacht."
  ]
 ]
};
const CAMPAIGN_PRELUDES={
 "frost": [
  [
   "Den alten Pass markieren.",
   "Grenzsteine",
   "Frostspäher sperren die Grenzzeichen ab.",
   "Die Spur durch den Schnee ist markiert.",
   "Passhöhe",
   "Die schwere Vorhut hält die Übersicht über den Pass.",
   "Die Vorhut verliert ihre Sicht auf den Zugang."
  ],
  [
   "Die Wagenbesitzer im Schnee suchen.",
   "Wagenreihe",
   "Eisspäher halten die Suchenden von den eingefrorenen Wagen fern.",
   "Die Suchenden finden die Spur der Besitzer.",
   "Wachfeuer",
   "Die Frostvorhut bewacht die geraubten Wegkarten.",
   "Die Wegkarten weisen zu den verschwundenen Besitzern."
  ],
  [
   "Dem Glockenklang bis zum Dorf folgen.",
   "Glockenspur",
   "Eine Frostpatrouille treibt Reisende vom Klang weg.",
   "Die Gruppe findet den Weg zum stummen Dorf.",
   "Glockenposten",
   "Die Vorhut bewacht die Kreuzung vor dem Dorf.",
   "Die Kreuzung ist frei für die Suchenden."
  ],
  [
   "Eine verschlossene Laterne erreichen.",
   "Laternensteg",
   "Eisspäher halten Edda von der Laterne fern.",
   "Edda kann die Laterne untersuchen.",
   "Eisposten",
   "Die Passvorhut schützt den Verschluss der Laterne.",
   "Die Laterne zeigt den Zugang zum Eispass."
  ],
  [
   "Den Sonnenfunken der Kundschafter schützen.",
   "Späherpfad",
   "Eisspäher verfolgen die Träger des warmen Funkens.",
   "Die Kundschafter bringen den Funken zurück.",
   "Schattenposten",
   "Die Frostvorhut beobachtet jeden warmen Lichtpunkt.",
   "Der Funken wird nicht mehr vom Posten verfolgt."
  ],
  [
   "Den schmalen Weg unter dem See prüfen.",
   "Uferzeichen",
   "Eispatrouillen halten die Kundschafter vom Ufer fern.",
   "Die Kundschafter können den Weg markieren.",
   "Seeposten",
   "Die schwere Vorhut bewacht den Zugang zum gefrorenen See.",
   "Der Zugang zum See steht zur Erkundung offen."
  ],
  [
   "Die noch lebende Quelle finden.",
   "Quellenspur",
   "Frostspäher vertreiben die Suchenden aus der warmen Senke.",
   "Die Quelle wird für Oren markiert.",
   "Schluchtposten",
   "Die Frostvorhut kontrolliert den direkten Zugang zur Senke.",
   "Der Zugang zur Quelle wird freigelegt."
  ],
  [
   "Die verlorene Expedition im Schnee suchen.",
   "Zeltspur",
   "Frostpatrouillen halten die Suchenden von den Zelten fern.",
   "Die Suchenden finden das Tagebuch der Expedition.",
   "Expeditionsposten",
   "Die Zeitvorhut bewacht die verschwundenen Wegzeichen.",
   "Die Wegzeichen führen zur Uhr aus Eis."
  ],
  [
   "Das letzte Licht am Gletscher bewahren.",
   "Lichtspur",
   "Frostspäher schneiden die Laternenhüter vom Gletscherweg ab.",
   "Die Hüter können die Lichtspur weitertragen.",
   "Schattenkante",
   "Die Frostvorhut schützt die Stelle, an der das Licht verschwindet.",
   "Ihr erreicht den letzten beleuchteten Zugang."
  ],
  [
   "Die Schlucht zum Winterhof erkunden.",
   "Schluchtrand",
   "Eisspäher verweigern den Kundschaftern den Zugang.",
   "Die Kundschafter zeichnen eine Fluchtroute aus dem Hof.",
   "Schluchtposten",
   "Die Hofvorhut kontrolliert den direkten Durchgang.",
   "Der Durchgang zum Hof liegt offen."
  ],
  [
   "Die Geretteten entlang der Laternen sammeln.",
   "Nachzüglerweg",
   "Frostspäher treiben kleine Gruppen vom Laternenweg ab.",
   "Die Nachzügler finden zum gemeinsamen Zug.",
   "Letzte Wegwache",
   "Die Frostvorhut blockiert die Verbindung der Gruppen.",
   "Die Gruppen können sich am selben Weg sammeln."
  ],
  [
   "Den Zugang zur Winterkönigin freilegen.",
   "Hoftor",
   "Die letzte Vorhut hält Boten vom Hof fern.",
   "Eddas Nachricht erreicht den Hof.",
   "Frostbollwerk",
   "Die stärkste Vorhut bewacht den direkten Zugang zur Königin.",
   "Die Truppe kann den letzten Hof betreten."
  ]
 ],
 "embers": [
  [
   "Dem Gefangenenwagen folgen.",
   "Aschenstraße",
   "Kettenspäher verhindern, dass die Wagen verfolgt werden.",
   "Die Spur des Wagens bleibt sichtbar.",
   "Wagenvorhut",
   "Die schwere Eskorte deckt die Abzweigung zur Mine.",
   "Ihr findet die Abzweigung in die Tiefe."
  ],
  [
   "Den Tunnel unter der kalten Esse erkunden.",
   "Essezugang",
   "Kettenspäher halten Kundschafter von der stillgelegten Esse fern.",
   "Der Tunneleingang wird für Brann markiert.",
   "Kranposten",
   "Die Vorhut schützt den direkten Abstieg.",
   "Der Abstieg kann erkundet werden."
  ],
  [
   "Die Türen der besetzten Werkstätten finden.",
   "Werkstatthöfe",
   "Kettenspäher treiben Suchende von den Höfen weg.",
   "Die verschlossenen Werkstätten sind auf dem Plan verzeichnet.",
   "Schlüsselposten",
   "Die Vorhut bewacht die Zugangszeichen der Werkstätten.",
   "Brann erhält die Zugangszeichen."
  ],
  [
   "Den Abfluss des freien Schmieds sichern.",
   "Abflussufer",
   "Eine Suchpatrouille verfolgt den Schmied bis zum Abfluss.",
   "Der Schmied kann den Ausweg zeigen.",
   "Abflussposten",
   "Die Vorhut hält die direkte Verbindung zur Schmiede besetzt.",
   "Der Zugang hinter der Schmiede steht offen."
  ],
  [
   "Die Befreiten zum ersten Gespräch führen.",
   "Feuerstellen",
   "Schuldspäher vertreiben kleine Gruppen von den Feuerstellen.",
   "Die Befreiten können über einen freiwilligen Bund sprechen.",
   "Fahndungsposten",
   "Die Vorhut überwacht das Treffen aus der Höhe.",
   "Das Treffen entgeht der Fahndung."
  ],
  [
   "Den Durchgang zwischen den Öfen finden.",
   "Ofengasse",
   "Kettenspäher blockieren Nimas Weg zum Archiv.",
   "Nima erreicht die Zufahrt des Archivs.",
   "Ofenposten",
   "Die Vorhut schützt die direkte Archivzufahrt.",
   "Der direkte Weg zum Archiv wird geöffnet."
  ],
  [
   "Die verlassenen Werkstätten prüfen.",
   "Kohlenpfad",
   "Schuldspäher hindern Brann daran, die Werkstätten zu betreten.",
   "Brann findet eine noch nutzbare Esse.",
   "Kohlenvorhut",
   "Die schwere Vorhut hält den Weg zu den alten Lagern besetzt.",
   "Die alten Lager können untersucht werden."
  ],
  [
   "Die Verfolger der Schmiede aufspüren.",
   "Fährtenweg",
   "Suchtruppen haben den Rückweg der Befreiten entdeckt.",
   "Die Befreiten können vor den Verfolgern ausweichen.",
   "Fahndungslager",
   "Die Vorhut bewacht die frisch ausgestellten Suchbefehle.",
   "Die Suchbefehle verraten die nächste Jagdroute."
  ],
  [
   "Die unlesbaren Verträge am Archivtor bergen.",
   "Torwand",
   "Vertragsspäher reißen die Namen von der Torwand.",
   "Nima bringt die verbliebenen Verträge in Sicherheit.",
   "Siegelposten",
   "Die Vorhut schützt den Zauber über der Torwand.",
   "Die Namen an der Torwand werden entzifferbar."
  ],
  [
   "Dem Hammerschlag unter den Amboss folgen.",
   "Fundamentweg",
   "Ambossspäher sperren die Stufen unter der Halle.",
   "Brann folgt dem Schlag bis zum Fundament.",
   "Hammerposten",
   "Die schwere Vorhut schützt den Abstieg unter den Amboss.",
   "Der Abstieg zum Fundament ist frei."
  ],
  [
   "Die Befreiten hinter dem Banner versammeln.",
   "Sammelweg",
   "Kettenspäher schneiden einzelne Gruppen von eurem Zeichen ab.",
   "Die Befreiten finden zum gemeinsamen Banner.",
   "Bannerposten",
   "Die Vorhut kontrolliert den einzigen Versammlungsplatz.",
   "Der Platz steht den freien Stimmen offen."
  ],
  [
   "Den Zugang zur letzten Esse öffnen.",
   "Hallenstufen",
   "Die Richtervorhut hält Boten und Schmiede vor der Halle auf.",
   "Die freien Schmiede erreichen die Hallenstufen.",
   "Richtervorposten",
   "Die schwerste Vorhut schützt den direkten Zugang zum Amboss.",
   "Ihr erreicht den Eingang zur Richterhalle."
  ]
 ],
 "depths": [
  [
   "Den Landungssteg für die Boote sichern.",
   "Strandweg",
   "Flutspäher treiben die Ankommenden vom Steg weg.",
   "Ari kann ein erstes Boot am Steg befestigen.",
   "Stegposten",
   "Die schwere Vorhut hält den direkten Landeplatz besetzt.",
   "Der Landeplatz kann für die Boote vorbereitet werden."
  ],
  [
   "Die Gezeiten zwischen den Klippen erkunden.",
   "Uferzeichen",
   "Wasserspäher hindern die Kundschafter am Markieren der Flutgrenze.",
   "Die Gruppe kennt die noch trockenen Abschnitte.",
   "Klippenposten",
   "Die Gezeitenvorhut kontrolliert die Aussicht auf das Wasser.",
   "Die Kundschafter erkennen den verbleibenden Rückweg."
  ],
  [
   "Den Zugang zum überfluteten Markt finden.",
   "Rudererspur",
   "Namenlose Späher sperren die trockenen Treppen ab.",
   "Lio findet die Treppe zum Marktplatz.",
   "Marktvorhut",
   "Die Vorhut bewacht den kürzesten Weg zu den alten Namenszeichen.",
   "Der Zugang zu den Namenszeichen wird sichtbar."
  ],
  [
   "Die versprengten Reisenden am Ankerplatz sammeln.",
   "Ankerufer",
   "Flutspäher halten die Reisenden voneinander getrennt.",
   "Ari führt die Gruppen an einem Ufer zusammen.",
   "Ankervorhut",
   "Die schwere Vorhut hält den trockenen Sammelplatz besetzt.",
   "Der Sammelplatz ist erreichbar."
  ],
  [
   "Die Richtung der untergetauchten Glocke bestimmen.",
   "Glockenecho",
   "Wasserspäher treiben Suchende von der Glockenspur weg.",
   "Die Suchenden bestimmen die Richtung zum Hafen.",
   "Glockenvorposten",
   "Die Vorhut bewacht den Aussichtspunkt über den Hafen.",
   "Ari erkennt den Glockenturm im Wasser."
  ],
  [
   "Das kurze Gezeitenfenster abpassen.",
   "Uferkundung",
   "Flutspäher blockieren den Blick auf die trocknende Brücke.",
   "Die Gruppe erkennt, wann die Zufahrt frei wird.",
   "Brückenvorhut",
   "Die schwere Vorhut kontrolliert den direkten Weg zur Brücke.",
   "Die Truppe kann sich für das Gezeitenfenster sammeln."
  ],
  [
   "Lios Buchspur im Schilf sichern.",
   "Schilfpfad",
   "Namenlose Späher treiben die Suchenden von den Papierzeichen weg.",
   "Die Suchenden entdecken die trockene Buchspur.",
   "Schreibstubenvorhut",
   "Die Vorhut bewacht die Abzweigung zur versunkenen Schreibstube.",
   "Lio erkennt den Ort ihres verlorenen Buches."
  ],
  [
   "Die Stadtstufen aus der Strömung erreichen.",
   "Stufenrand",
   "Wasserspäher treiben die Kundschafter von den alten Stufen weg.",
   "Der trockene Stufenabschnitt wird markiert.",
   "Stadtvorposten",
   "Die Vorhut kontrolliert den direkten Abstieg zum Platz.",
   "Die Truppe kann den Stadtplatz erreichen."
  ],
  [
   "Den letzten Leuchtturm für die Boote sichern.",
   "Lichtpfad",
   "Flutspäher wollen die Lampenhüter vom Turm vertreiben.",
   "Die Lampenhüter halten das Licht für Ari sichtbar.",
   "Turmvorposten",
   "Die schwere Vorhut bewacht den direkten Aufstieg.",
   "Der Aufstieg zum Leuchtfeuer ist offen."
  ],
  [
   "Die Treppe hinter dem Riff erkunden.",
   "Riffspur",
   "Riffspäher sperren den schmalen Weg der Kundschafter ab.",
   "Die Kundschafter finden die alte Treppe.",
   "Tiefenvorhut",
   "Die schwere Vorhut kontrolliert den direkten Zugang hinter das Riff.",
   "Der Zugang zum Tiefenabstieg wird markiert."
  ],
  [
   "Den wartenden Schiffen das gemeinsame Zeichen bringen.",
   "Signalsteg",
   "Flutspäher schneiden die Signalboten von den Booten ab.",
   "Ari übermittelt allen Booten denselben Treffpunkt.",
   "Strömungsposten",
   "Die Vorhut überwacht die Signalstelle zwischen den Schiffen.",
   "Die Schiffssignale werden nicht mehr verfolgt."
  ],
  [
   "Die Truppe vor der letzten Schwelle sammeln.",
   "Schwellenufer",
   "Die letzte Flutvorhut trennt die Nachkommenden von der Truppe.",
   "Die Truppe erreicht gemeinsam das Schwellenufer.",
   "Letzter Flutposten",
   "Die schwerste Vorhut sperrt den direkten Übergang.",
   "Der Zugang zur letzten Flut steht offen."
  ]
 ],
 "eclipse": [
  [
   "Die vertrauten Silhouetten unter der dunklen Sonne prüfen.",
   "Stimmenpfad",
   "Nachtspäher zwingen die Silhouetten in ihre alten Rollen zurück.",
   "Tavi kann die Stimmen ohne fremden Befehl hören.",
   "Schattenposten",
   "Die Vorhut schützt die Quelle der erzwungenen Gestalten.",
   "Die Gestalten verraten den Weg zum ersten Echo."
  ],
  [
   "Tavis Weg aus der ersten Reise untersuchen.",
   "Alte Wegzeichen",
   "Chronikspäher verweigern jede Abweichung von den alten Zeichen.",
   "Yara findet eine nicht vorgeschriebene Abzweigung.",
   "Wiederholungsposten",
   "Die Vorhut bewacht die Stelle des früheren Scheiterns.",
   "Der Ort kann ohne den alten Ablauf betreten werden."
  ],
  [
   "Die Zeugen der vier Lager zusammenführen.",
   "Feuerstellenspur",
   "Nachtspäher halten die Lagerzeugen getrennt.",
   "Die Zeugen erreichen einen gemeinsamen Treffpunkt.",
   "Lagerkundung",
   "Die Vorhut beobachtet jeden Weg zwischen den Lagern.",
   "Die Zeugen können ihre Geschichten unbeobachtet austauschen."
  ],
  [
   "Die ersten Bannerboten am Nachtrand empfangen.",
   "Botenspur",
   "Nachtspäher wollen die ankommenden Boten zurückdrängen.",
   "Die ersten Boten finden zu Yaras Zeichen.",
   "Nachtrandposten",
   "Die Vorhut kontrolliert den Treffpunkt der Boten.",
   "Der Treffpunkt wird für die vier Banner geöffnet."
  ],
  [
   "Den gemeinsamen Trommelschlag finden.",
   "Taktspur",
   "Nachtspäher trennen die Trommler von ihren Bannern.",
   "Die Trommler können ihre Rhythmen miteinander hören.",
   "Taktvorposten",
   "Die Vorhut bewacht den aufgezwungenen Gleichklang.",
   "Tavi erkennt einen Takt außerhalb des alten Befehls."
  ],
  [
   "Den Seitenübergang zum Morgen erkunden.",
   "Seitenrand",
   "Chronikspäher sperren die offenen Ränder der Seiten ab.",
   "Yara entdeckt einen erreichbaren Übergang.",
   "Chronikvorhut",
   "Die schwere Vorhut schützt das Siegel des Morgenübergangs.",
   "Das Siegel kann aus der Nähe untersucht werden."
  ],
  [
   "Die Namenhüter zwischen den Seiten finden.",
   "Sucherpfad",
   "Nachtspäher jagen die Hüter von Blatt zu Blatt.",
   "Die Hüter können die ersten Fundstellen markieren.",
   "Seitenkundung",
   "Die Vorhut kontrolliert die Zugänge zu den leeren Einträgen.",
   "Yara erkennt die Spur der ausgelöschten Namen."
  ],
  [
   "Den unbekannten Pfad auf der neuen Seite prüfen.",
   "Leerer Seitenrand",
   "Chronikspäher versuchen den neuen Rand zu versiegeln.",
   "Tavi kann den nicht vorhergesagten Weg betreten.",
   "Befehlsvorposten",
   "Die Vorhut schützt die Vorschrift für den nächsten Schritt.",
   "Der nächste Schritt kann frei gewählt werden."
  ],
  [
   "Die letzten Verbündeten zur Bannerberatung führen.",
   "Verbündetenweg",
   "Nachtspäher treiben Ankommende von der Beratung weg.",
   "Die Verbündeten finden an ein gemeinsames Feuer.",
   "Nachtkundung",
   "Die Vorhut beobachtet die Verbindungen der vier Banner.",
   "Die Banner können unbeobachtet beraten."
  ],
  [
   "Die Echos an der letzten Brücke ansprechen.",
   "Echoufer",
   "Chronikspäher erzwingen den alten Zugang zur Brücke.",
   "Tavi findet eine andere Möglichkeit, die Echos zu erreichen.",
   "Brückenvorhut",
   "Die schweren alten Gegner kontrollieren den direkten Aufstieg.",
   "Die Truppe erreicht den Anfang der Zeugenbrücke."
  ],
  [
   "Die Nachkommenden auf das Aufbruchszeichen vorbereiten.",
   "Nachzüglerpfad",
   "Nachtspäher trennen kleine Gruppen von den Bannerboten.",
   "Alle Gruppen erfahren, wo das Zeichen gegeben wird.",
   "Letzter Signalposten",
   "Die Vorhut überwacht jeden Ruf zwischen den Bannern.",
   "Die Banner können ihr Zeichen frei weitergeben."
  ],
  [
   "Die letzte Nachtwache vom Morgenrand lösen.",
   "Morgenrand",
   "Die letzte Vorhut sperrt die hellen Zugänge für die Truppe.",
   "Die Truppe versammelt sich am Morgenrand.",
   "Nachtvorposten",
   "Die schwerste Vorhut bewacht den direkten Weg zum Ursprung.",
   "Der Zugang zum letzten Widerstand ist offen."
  ]
 ]
};
const CAMPAIGN_BOSS_STORIES={
 "crown": [
  [
   "Den Dornenhain aus dem Kronenzwang lösen.",
   "Der Siegelwächter hat den Zugang zum Dornenhof besetzt. Sein Kroneneid hält die Wachen an die fremde Krone gebunden.",
   "Der Dornenhof kann ohne Kronenbefehl über euren Bund entscheiden."
  ],
  [
   "Die Morgenpforte halten.",
   "Der Belagerungshauptmann bündelt die Truppen zum Sturm. Solange er den Angriff führt, bleibt Rotfurts Fluchtweg bedroht.",
   "Die Belagerung wird gebrochen; der Weg zum falschen Banner liegt offen."
  ],
  [
   "Die Splitterkrone entmachten.",
   "Der Splittersouverän bindet seine Leibwachen mit dem Kroneneid und verweigert den freien Bannern jede eigene Stimme.",
   "Die freien Banner entscheiden über die Krone; niemand muss ihrem Befehl folgen."
  ]
 ],
 "rift": [
  [
   "Den lebenden Zoll der Knochenbrücke brechen.",
   "Der Brückenwächter hält den Zoll mit seinen gebundenen Wachen aufrecht. Niemand erreicht die andere Seite ohne seinen Befehl.",
   "Die Knochenbrücke steht Reisenden beider Welten offen."
  ],
  [
   "Den Anker im Sturmherz lösen.",
   "Der Sturmkommandant verteidigt den Anker, der immer neue Truppen durch den Riss zieht.",
   "Der unaufhörliche Nachschub endet; die vier Banner können sich sammeln."
  ],
  [
   "Die Heimkehr gegen den Namenlosen verteidigen.",
   "Der Namenlose Heerführer hält die letzte Schwelle besetzt. Seine Leibtruppe trennt die Heimkehrenden von beiden Welten.",
   "Die Heimkehrenden passieren die Schwelle; die Banner bestimmen gemeinsam ihre Zukunft."
  ]
 ],
 "frost": [
  [
   "Den Eispass für die Eingeschlossenen öffnen.",
   "Der Passwächter hält die Straße mit dem Frostbefehl geschlossen. Die Geretteten kommen ohne offenen Pass nicht ins Freie.",
   "Die erste Fluchtroute durch den Eispass ist offen."
  ],
  [
   "Die eingeschlossenen Herzschläge aus der Uhr holen.",
   "Der Uhrwächter verwechselt Rettung mit Raub und schützt den Stillstand durch seine Wache.",
   "Die Herzschläge verlassen die Uhr, während Oren die Geretteten zur Quelle führt."
  ],
  [
   "Der Königin Zeit geben, den Zauber sicher zu lösen.",
   "Der letzte Frostwächter hält am alten Befehl fest und sperrt den Hof. Ihr kämpft gegen ihn, nicht gegen die Winterkönigin.",
   "Die letzte Gruppe erreicht die Straße; die Königin kann den Winter loslassen."
  ]
 ],
 "embers": [
  [
   "Die Schmieden von der Kettenwache befreien.",
   "Der Kettenhauptmann hält die Ausgänge besetzt und erzwingt die Arbeit durch alte Schuldverträge.",
   "Die Schmiede verlassen ihre Werkstätten aus eigenem Entschluss."
  ],
  [
   "Die Jagd auf die Befreiten beenden.",
   "Der Schuldvollstrecker verteidigt die Fahndungslisten. Solange sein Befehl gilt, bleibt jede freie Esse ein Versteck.",
   "Die Befreiten können ihre Namen wieder öffentlich nennen."
  ],
  [
   "Den Gehorsamszwang des eisernen Richters lösen.",
   "Der eiserne Richter schützt das letzte Urteilssiegel mit seinen Leibwachen. Freiwillige Stimmen erkennt er nicht an.",
   "Nima bewahrt gelöste Verträge; die freien Schmiede bestimmen ihre eigenen Eide."
  ]
 ],
 "depths": [
  [
   "Den Ankerplatz gegen die Flut sichern.",
   "Der Ankerwächter bindet den trockenen Steg an den Befehl der Flut. Die Boote finden sonst keinen gemeinsamen Halt.",
   "Die verlorenen Boote können gemeinsam am Ankerplatz warten."
  ],
  [
   "Das Gedächtnis der versunkenen Stadt öffnen.",
   "Der Gezeitenhüter hält die Namen unter dem Stadtplatz gefangen und vertreibt alle Suchenden.",
   "Lio kann die gefundenen Namen in ihr trockenes Buch aufnehmen."
  ],
  [
   "Die Namen vor der letzten Flut bewahren.",
   "Die Flut des Vergessens verteidigt die Schwelle mit ihren gebundenen Wachen. Jede Heimkehr soll wieder namenlos werden.",
   "Ari führt die Boote durch die Schwelle; die Namen bleiben im trockenen Buch erhalten."
  ]
 ],
 "eclipse": [
  [
   "Den gemeinsamen Treffpunkt der Banner öffnen.",
   "Der Nachtwächter hält die ersten Bannerboten getrennt, damit jede Stimme ihre alte Chronik wiederholt.",
   "Die Bannerboten können erstmals voneinander unabhängige Geschichten teilen."
  ],
  [
   "Die ungeschriebene Seite offen halten.",
   "Der Chronikhüter schützt den vorgeschriebenen Ablauf und versucht jede neue Entscheidung zu versiegeln.",
   "Yaras Seite bleibt offen für einen Weg, den die alte Chronik nicht kennt."
  ],
  [
   "Der Nacht das Recht auf den letzten Satz nehmen.",
   "Der Ursprung der Nacht bindet seine Wachen an frühere Enden. Ihr müsst seinen Widerstand brechen, um frei weiterzugehen.",
   "Tavi erlebt einen Morgen ohne Wiederholungsbefehl; Yara lässt die nächste Seite offen."
  ]
 ]
};

// Story-only encounter context. Never consumes randomness or changes combat rules.
function narrativeEncounter(path=S?.pathChoice||'safe'){
 if(!S||S.tutorial||!CAMPAIGN_ENCOUNTERS[S.campaign])return null;
 const chapter=S.round,entry=journeyChapters(journeyLength(S))[chapter-1],story=entry?.story||12;
 const index=bossNumber(chapter,S);
 if(index){const row=CAMPAIGN_BOSS_STORIES[S.campaign][index-1];return {version:1,campaign:S.campaign,chapter,path:'boss',name:chapterName(chapter),goal:row[0],reason:row[1]+(campaignCatalogueActive()?' '+campaignEnemyBriefing(path):''),result:row[2]}}
 const rows=entry?.approach&&CAMPAIGN_PRELUDES[S.campaign]?CAMPAIGN_PRELUDES[S.campaign]:CAMPAIGN_ENCOUNTERS[S.campaign];
 const row=rows[story-1];if(!row)return null;
 const offset=path==='risk'?4:1;return {version:1,campaign:S.campaign,chapter,path:path==='risk'?'risk':'safe',goal:row[0],name:row[offset],reason:row[offset+1]+(campaignCatalogueActive()?' '+campaignEnemyBriefing(path):''),result:row[offset+2]};
}
function narrativeResultMarkup(){
 const battle=S?.lastBattle,e=battle?.encounter;
 if(S?.tutorial||!e||e.version!==1||e.campaign!==S.campaign||!Number.isInteger(e.chapter)||e.chapter<1||e.chapter>S.round||!['safe','risk','boss'].includes(e.path)||typeof battle.won!=='boolean')return '';
 const text=battle.won?e.result:`${e.goal} Die Truppe musste sich zurückziehen. Dieses Ziel bleibt noch offen.`;
 return `<article class="encounter-result"><b>${battle.won?'Erreicht':'Noch offen'} · Begegnung ${e.chapter}</b><p>${narrativeEscape(text)}</p></article>`;
}
function narrativeMissionMarkup(){const e=narrativeEncounter();return e?`<article class="encounter-mission"><b>${narrativeEscape(e.goal)}</b><p>${narrativeEscape(e.reason)}</p>${campaignCatalogueActive()?`<details><summary>Warum diese Gegner kämpfen</summary><p>${narrativeEscape(CAMPAIGN_ENEMY_LORE[S.campaign])}</p></details>`:''}</article>`:''}
function renderNarrativeResult(){const html=narrativeResultMarkup();if(!html)return;const target=S.phase==='reward'?$('reward'):S.phase==='shop'?$('journeyChoice'):S.phase==='end'?$('message'):null;if(target)target.insertAdjacentHTML('afterbegin',html)}
