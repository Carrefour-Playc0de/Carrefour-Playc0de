import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilBlocksDibujoCartulinas extends BasePage {

    readonly BLOCKS_DIBUJO_CARTULINAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BLOCKS_DIBUJO_CARTULINAS = this.page.locator('//a [@id="menu-item-category-block-dibujo-cartulinas"]')
    }

    async clickBazarTextilBlocksDibujoCartulinas(): Promise<void> {
        await this.click(this.BLOCKS_DIBUJO_CARTULINAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilBlocksDibujoCartulinas(): Promise<void> {
        await this.clickBazarTextilBlocksDibujoCartulinas()
    }
}
