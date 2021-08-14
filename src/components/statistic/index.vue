<template>
    <div class="stistic-box flex-box">
        <div v-for="val in 2" :key="val" class="stistic-box-item">
            <p class="grayColor">total{{val}}</p>
            <div>50</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.stistic-box {
    .stistic-box-item {
        position: relative;
        padding: 10px 15px 0;

        &::after {
            position: absolute;
            display: block;
            content: '';
            width: 1px;
            background-color: #ccc;
            height: 50%;
            top: 20px;
            right: 0;
        }
        
        &:last-child::after {
            display: none;
        }

        p {
            margin-bottom: 5px;
        }

        div {
            font-size: 1.5em;
        }
    }
}
</style>