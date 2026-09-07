# My-shopping-website

This repository is a demo multi-vendor marketplace (Bittu Store).

New features added on branch `feature/all-features`:

- Persistence: products, cart and orders saved to localStorage.
- Export: CSV export for orders, ledger and seller products.
- Filters & sorting on product list (category, price range, sort).
- Image upload preview for product listing.
- Simple role switcher (Buyer / Seller / Admin) to toggle interfaces.
- Order lifecycle actions: Mark Shipped / Delivered / Cancelled.
- QR camera demo: capture camera frame as QR image (demo-only).
- Product reviews placeholder (stored in product objects).

How to use
1. Open Myweb.html in a browser (preferably via a local web server for camera features).
2. Use the Role dropdown (top-right) to switch between Buyer, Seller, Admin views.
3. Seller can add products (image URL or upload) and provide a QR image URL.
4. Buyers can add to cart and checkout; orders persist in localStorage.
5. Admin can export ledger and orders as CSV.

Notes
- Camera QR capture requires HTTPS or localhost and user permission; it only captures an image frame as a demo.
- CSVs are generated in the browser using localStorage data.

Contact: bittubhai21323@gmail.com
