<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bütçe Takip Uygulaması</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- Google Font (isteğe bağlı) -->
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        background-color: #000000;
        color: #ffffff;
        font-family: "Inter", sans-serif;
      }
    </style>
  </head>
  <body>
    <div class="container mt-5">
      <!-- Başlık (Beyaz renkte) -->
      <h2 class="text-center text-white fw-bold mb-4">
        💰 Bütçe Takip Uygulaması
      </h2>

      <!-- Toplam Bakiye -->
      <div
        class="alert alert-success text-center fs-5 fw-semibold"
        role="alert"
      >
        Toplam Bakiye: <span id="total-balance">0 TL</span>
      </div>

      <!-- İşlem Ekleme Kartı -->
      <div class="card mb-4 bg-dark text-light border-info">
        <div class="card-header bg-info text-dark fw-semibold">
          Yeni İşlem Ekle
        </div>
        <div class="card-body">
          <form id="transaction-form">
            <div class="row g-3">
              <div class="col-md-4">
                <label for="transaction-type" class="form-label">Tip</label>
                <select id="transaction-type" class="form-select">
                  <option value="income">Gelir</option>
                  <option value="expense">Gider</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="transaction-amount" class="form-label">Tutar</label>
                <input
                  type="number"
                  id="transaction-amount"
                  class="form-control"
                  placeholder="Tutar girin"
                  required
                />
              </div>
              <div class="col-md-4">
                <label for="transaction-date" class="form-label">Tarih</label>
                <input
                  type="date"
                  id="transaction-date"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-12">
                <label for="transaction-description" class="form-label"
                  >Açıklama</label
                >
                <input
                  type="text"
                  id="transaction-description"
                  class="form-control"
                  placeholder="İşlem açıklaması"
                  required
                />
              </div>
              <div class="col-12 text-end">
                <button type="submit" class="btn btn-success mt-3">
                  İşlemi Ekle
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- İşlem Listesi Kartı -->
      <div class="card bg-dark text-light border-secondary">
        <div class="card-header bg-secondary text-white fw-semibold">
          İşlem Listesi
        </div>
        <div class="card-body">
          <table class="table table-dark table-hover table-bordered mb-0">
            <thead class="table-secondary text-dark">
              <tr>
                <th>Tarih</th>
                <th>Tip</th>
                <th>Açıklama</th>
                <th>Tutar</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody id="transaction-list">
              <!-- JS ile işlemler buraya eklenecek -->
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- JS -->
    <script type="module" src="app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
