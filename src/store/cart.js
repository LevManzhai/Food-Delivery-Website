// Simple store for cart management
class CartStore {
  constructor() {
    this.items = this.loadFromStorage()
  }

  // Load cart from localStorage
  loadFromStorage() {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  }

  // Save cart to localStorage
  saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  // Add item to cart
  addItem(item) {
    const existingItem = this.items.find(cartItem => String(cartItem.id) === String(item.id))
    if (existingItem) {
      existingItem.quantity++
    } else {
      this.items.push({
        ...item,
        quantity: 1
      })
    }
    this.saveToStorage()
    this.notifyListeners()
  }

  // Remove item from cart
  removeItem(itemId) {
    this.items = this.items.filter(item => String(item.id) !== String(itemId))
    this.saveToStorage()
    this.notifyListeners()
  }

  // Change item quantity
  updateQuantity(itemId, quantity) {
    const item = this.items.find(item => String(item.id) === String(itemId))
    if (item) {
      if (quantity <= 0) {
        this.removeItem(itemId)
      } else {
        item.quantity = quantity
        this.saveToStorage()
        this.notifyListeners()
      }
    }
  }

  // Increase quantity
  increaseQuantity(itemId) {
    const item = this.items.find(item => String(item.id) === String(itemId))
    if (item) {
      item.quantity++
      this.saveToStorage()
      this.notifyListeners()
    }
  }

  // Decrease quantity
  decreaseQuantity(itemId) {
    const item = this.items.find(item => String(item.id) === String(itemId))
    if (item && item.quantity > 1) {
      item.quantity--
      this.saveToStorage()
      this.notifyListeners()
    } else if (item && item.quantity === 1) {
      this.removeItem(itemId)
    }
  }

  // Clear cart
  clearCart() {
    this.items = []
    this.saveToStorage()
    this.notifyListeners()
  }

  // Get total amount
  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  // Get items count
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0)
  }

  // Get all items
  getItems() {
    return this.items
  }

  // Change listeners
  listeners = []

  // Add listener
  subscribe(listener) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  // Notify listeners
  notifyListeners() {
    console.log('Store: Notifying listeners, count:', this.listeners.length)
    this.listeners.forEach((listener, index) => {
      console.log('Store: Calling listener', index)
      listener(this.items)
    })
  }
}

// Create single store instance
const cartStore = new CartStore()

export default cartStore
