<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    
    protected $fillable = [
        'courier_id', 'customer_id', 'user_id', 'amount', 'start_date', 'end_date', 'status'
    ]; 
}
