# KN07
## A) Begriffe und Konzepte erlernen
### 1. Unterschied zwischen Pods und Replicas
Pods sind die kleinsten ausführbaren Einheiten in Kubernetes und können einen oder mehrere Container enthalten, die zusammen auf einem Cluster laufen. Ein Replica ist da, um z eine festgelegte Anzahl identischer Pods gleichzeitig ausgeführt wird, um die Verfügbarkeit und Skalierbarkeit einer Anwendung zu gewährleisten. Einfach gesagt bedeutet dies, dass Pods die Anwendungsinstanz sind, während ein Replica dafür sorgt das genügend Pods laufen, um die Anwendung am Laufen zu halten.

### 2. Unterschied zwischen Service und Deployment
Ein Service ist wie eine feste Adresse für eine Gruppe von Pods in Kubernetes. Es sorgt dafür, dass andere Teile der Anwendung mit diesen Pods kommunizieren können, ohne sich Gedanken über ihre genauen Standorte machen zu müssen. Es hilft auch dabei, den Verkehr gleichmäßig auf diese Pods zu verteilen.
Ein Deployment ist eine Anweisung darüber, wie Pods in Kubernetes erstellt und aktualisiert werden sollen. Es ermöglicht es, Änderungen an der Anwendung zu machen, während sie weiter läuft. Zum Beispiel kann es neue Pods hinzufügen oder alte ersetzen, ohne dass die Anwendung für Benutzer offline geht.

### 3. Welches Problem löst Ingress?
Ingress ist wie ein Tor für den Verkehr von außen in einen Kubernetes-Cluster. Es nimmt Anfragen von außerhalb des Clusters entgegen und leitet sie an die richtigen Dienste innerhalb des Clusters weiter, basierend auf vordefinierten Regeln. Ohne Ingress müssten alle Dienste im Cluster eigene öffentliche IP-Adressen und Ports haben, was unpraktisch und unübersichtlich wäre.

### 4. Für was ist ein StatefulSet?
Ein StatefulSet in Kubernetes hilft bei der Verwaltung von Anwendungen, die sich an bestimmte Zustände erinnern müssen, wie z. B. der momentan eingeloggte User oder andere Daten, die über längere Zeit gespeichert werden müssen. Im Gegensatz zu Anwendungen, die keine dauerhaften Daten benötigen und einfach dupliziert werden können, müssen stateful Anwendungen bestimmte Daten speichern, die stabil und persistent sind. Zum Beispiel könnte ein StatefulSet für ein Messaging-System verwendet werden, bei dem die Nachrichten auf jedem Node gespeichert sind, um sicherzustellen, dass sie nicht verloren gehen.

## B) Demo Projekt

![img](installing.png)
![img](get all.png)
![img](configmapgetsecret.png)

Der Unterschied liegt beim Deployment und Service erklaerung balablablabl

# MongoURL
erklärung blablalab

# Master Node describe
![img](masterdescribe.png)

# Other Node describe
![img](node2describe.png)

# Mongo Service
![img](mongodbmasterdescribe.png)

erkläunr uterschied blalabala

## Website Aufruf
# Master Node

![img](userprofileonport30100.png)

# Some other Node

![img](node1dog.png)

erkärung balaafb securtiy port 30100rules adding

## Verbindung zu MongoDB Compass
erkrpugn balalal

## Port und Replicas anpassen

- In web.yaml den NodePort von 30100 zu 32000 und replicas auf 3 erhöhen
- apply Befehl nochmals ausführen
- Security anpassen
- Testen mit Aufruf der Website testen und dem ```microk8s kubectl describe service webapp-service command```

![img](valide3replica.png)

erkl'rung replica unterscheid balalb

![img](32000changevim.png)

