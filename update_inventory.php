<?php
header('Content-Type: application/json');

// 獲取 POST 數據
$data = json_decode(file_get_contents('php://input'), true);

// 將數據寫入檔案
if (file_put_contents('inventory.txt', json_encode($data, JSON_PRETTY_PRINT))) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => '無法更新庫存']);
}
?> 