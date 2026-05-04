# Arranque Direto de Motor Trifásico com Sinalização

##  Objetivo
Implementar um sistema de arranque direto de motor trifásico com sinalização de estado e proteção contra sobrecarga e curto-circuito.

---

## ⚙️ Componentes
- S0 → Botão STOP (Normalmente Fechado)
- S1 → Botão START (Normalmente Aberto)
- K1 → Contator trifásico
- F2 → Relé térmico (proteção contra sobrecarga)
- F → Fusíveis (proteção contra curto-circuito)
- M → Motor trifásico (U1, V1, W1 – fases / PE – aterramento)

### 💡 Sinalização
- H1 → Motor em funcionamento
- H2 → Sistema pronto para funcionamento
- H3 → Sobrecarga (ligado ao contacto NA 97-98 do relé térmico)

---

## 🔁 Funcionamento
1. Ao energizar o sistema, H2 acende indicando que está pronto para operação.
2. Ao pressionar START (S1), o contator K1 é energizado.
3. Os contactos principais fecham e alimentam o motor trifásico.
4. O motor entra em funcionamento e H1 acende.
5. O contacto auxiliar de K1 mantém o circuito ativo (auto-retenção).
6. Ao pressionar STOP (S0), o circuito abre e o motor desliga.
7. Em caso de sobrecarga, o relé térmico atua, desliga o sistema e H3 acende.

---

## ⚠️ Proteções
- Fusíveis para proteção contra curto-circuito
- Relé térmico ajustado à corrente nominal do motor
- Ligação à terra (PE) para segurança

---

## 🖼️ Diagrama
![Diagrama do circuito](arranque-direto-trifasico)

---

## 📌 Aplicações
- Motores industriais
- Bombas trifásicas
- Sistemas de ventilação e compressão

---

## 📬 Autor
Gulamo Jamal | gulamo.jamal@outlook.com | gulamojamal@gmail.com | brevemito.com
