import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosQuesosFeteados extends BasePage {

    readonly QUESOS_FETEADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUESOS_FETEADOS = this.page.locator('//a [@id="menu-item-category-quesos-feteados"]')
    }

    async clickLacteosProdsFrescosQuesosFeteados(): Promise<void> {
        await this.click(this.QUESOS_FETEADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosQuesosFeteados(): Promise<void> {
        await this.clickLacteosProdsFrescosQuesosFeteados()
    }
}
