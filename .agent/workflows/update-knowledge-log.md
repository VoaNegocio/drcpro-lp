---
description: Update the optimization/development log with new findings, errors, and solutions.
---

1. **Analyze Context**: Review the recent conversation and tasks to identify the specific "Cycle" or feature being worked on.
2. **Identify Errors**: List the specific problems, mistakes, or inefficiencies found (e.g., "Large images on mobile", "Blocking scripts").
3. **Identify Solutions**: List the specific technical solutions applied (e.g., "Used <picture> tag", "Implemented lazy loading").
4. **Extract Lessons**: Formulate "Golden Rules" or key takeaways that should be followed in the future.
5. **Format Entry**: Create a markdown entry following the standard format:
   ```markdown
   ### 📅 Ciclo: [Name of Cycle/Feature] ([Date/Version])

   #### ❌ O que Erramos / Problemas Encontrados
   1. [Problem 1]
   2. [Problem 2]

   #### ✅ O que Acertamos / Soluções Aplicadas
   1. [Solution 1]
   2. [Solution 2]

   #### 💡 O APRENDIZADO (Regras de Ouro)
   1. **Regra do [Topic]**: [Description]
   ```
6. **Append to Log**: Append this entry to the `otimizacaodev_log.md` file, inserting it before the "Próximo Ciclo" placeholder or at the end of the "Registro de Aprendizados" section.
7. **Commit**: Commit the changes to the repository with a descriptive message (e.g., "docs: update knowledge base with [cycle] details").
