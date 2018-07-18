# Hooks

- beforeCreate()
  - Initialize Data and Events
- created() - Once the instance is created
  - Compile template or el's template
- beforeMount() 
  - Replace el with compiled template
... Loop - Mounted to DOM
- updated()
  - Re-render DOM
- beforeUpdate() 
  - Data Changed
... end
- beforeDestroy()
- destroyed() - Destroyed
